// --- Configuration & Initialization ---
const TIME_PER_QUESTION_SECONDS = 45; // Time per question in seconds (e.g., 45 seconds)

let MAX_TEST_TIME_SECONDS; // Dynamic total time in seconds
let currentIndex = 0;
let answers = [];
let questions = [];
let timerInterval;
let timeRemainingSeconds = 0; // Initialize to 0, will be set dynamically

// DOM Elements
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const timerDisplay = document.getElementById('timer');
const currentQDisplay = document.getElementById('currentQ');
const totalQDisplay = document.getElementById('totalQ');
const hideTimerCheckbox = document.getElementById('hideTimer');

// Wait for i18n and DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Delay to ensure i18n.js has run
    setTimeout(initializeTest, 100);
});

function initializeTest() {
    console.log('Initializing test...');
    // Debug: Check initial DOM elements
    console.log('DOM check:', {
        currentQDisplay: !!currentQDisplay,
        totalQDisplay: !!totalQDisplay,
        currentQText: currentQDisplay ? currentQDisplay.textContent : 'null',
        totalQText: totalQDisplay ? totalQDisplay.textContent : 'null'
    });

    // 1. Load questions based on topic
    const topic = localStorage.getItem('topic');
    if (!topic) {
        console.error("No topic found in localStorage.");
        if (questionText) questionText.textContent = "Error: No topic selected. Please set a topic in settings.";
        return;
    }
    switch (topic) {
        case "Pre-Algebra-1": questions = PreAlgebra1Questions; break;
        case "Pre-Algebra-2": questions = PreAlgebra2Questions; break;
        case "Pre-Algebra-3": questions = PreAlgebra3Questions; break;
        case "Algebra1-1": questions = Algebra1Questions; break;
        case "Algebra1-2": questions = Algebra1_2Questions; break;
        case "Algebra2-1": questions = Algebra2Questions; break;
        case "Algebra2-2": questions = Algebra2_2Questions; break;
        case "Geometry-1": questions = GeometryQuestions; break;
        case "Geometry-2": questions = Geometry2Questions; break;
        case "PreCalculus-1": questions = PreCalculus1Questions; break;
        case "PreCalculus-2": questions = PreCalculus2Questions; break;
        default:
            console.error("Selected topic not found or questions not loaded. Using fallback.", topic);
            if (typeof PreAlgebra1Questions !== 'undefined') {
                questions = PreAlgebra1Questions;
            } else {
                if (questionText) questionText.textContent = "Error: Question data not available for topic: " + topic;
                return;
            }
    }
    if (!questions || questions.length === 0) {
        console.error("No questions loaded for topic:", topic, "Questions array:", questions);
        if (questionText) questionText.textContent = "Error: No questions available for topic: " + topic;
        return;
    }
    console.log('Topic loaded:', topic, 'Questions count:', questions.length);

    // Calculate dynamic total time
    MAX_TEST_TIME_SECONDS = questions.length * TIME_PER_QUESTION_SECONDS;
    timeRemainingSeconds = parseInt(localStorage.getItem('timeRemaining')) || MAX_TEST_TIME_SECONDS;

    // Set initial timer display
    if (timerDisplay) {
        const initialMinutes = Math.floor(timeRemainingSeconds / 60);
        const initialSeconds = timeRemainingSeconds % 60;
        timerDisplay.textContent = `${initialMinutes.toString().padStart(2, '0')}:${initialSeconds.toString().padStart(2, '0')}`;
    }

    // Load previous answers and index
    const storedAnswers = localStorage.getItem('testAnswers');
    if (storedAnswers) {
        answers = JSON.parse(storedAnswers);
    } else {
        answers = new Array(questions.length).fill(null);
    }

    // Set up progress tracker with confirmed question count
    if (currentQDisplay && totalQDisplay) {
        console.log('Before update - currentQDisplay:', currentQDisplay.textContent, 'totalQDisplay:', totalQDisplay.textContent);
        currentQDisplay.textContent = currentIndex + 1; // Start at 1
        totalQDisplay.textContent = questions.length;  // Should be 28
        console.log('After update - currentQDisplay:', currentQDisplay.textContent, 'totalQDisplay:', totalQDisplay.textContent);
    } else {
        console.error('Progress tracker elements not found:', {
            currentQDisplay: !!currentQDisplay,
            totalQDisplay: !!totalQDisplay
        });
    }

    // Start the timer
    startTimer();

    // Load the first question
    loadQuestion(currentIndex);

    // Initialize timer hide toggle
    if (hideTimerCheckbox && timerDisplay) {
        hideTimerCheckbox.addEventListener('change', (e) => {
            if (timeRemainingSeconds <= 600) {
                e.target.checked = false;
                return;
            }
            const isHidden = e.target.checked;
            if (isHidden) {
                timerDisplay.classList.add('hidden');
            } else {
                timerDisplay.classList.remove('hidden');
            }
            localStorage.setItem('timerHidden', isHidden ? 'true' : 'false');
        });
        const savedHidden = localStorage.getItem('timerHidden') === 'true';
        if (savedHidden && timeRemainingSeconds > 600) {
            hideTimerCheckbox.checked = true;
            timerDisplay.classList.add('hidden');
        }
    }
}

// --- Timer Logic ---
function startTimer() {
    if (!timerDisplay) {
        console.error('timerDisplay not found, cannot start timer');
        return;
    }
    timerInterval = setInterval(() => {
        timeRemainingSeconds--;
        const minutes = Math.floor(timeRemainingSeconds / 60);
        const seconds = timeRemainingSeconds % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        localStorage.setItem('timeRemaining', timeRemainingSeconds);

        if (timeRemainingSeconds <= 600) {
            timerDisplay.classList.remove('hidden');
            if (hideTimerCheckbox && hideTimerCheckbox.checked) {
                hideTimerCheckbox.checked = false;
                localStorage.setItem('timerHidden', 'false');
            }
        }

        if (timeRemainingSeconds <= 0) {
            clearInterval(timerInterval);
            submitTest(true);
        }
    }, 1000);
}

// --- Question Loading and UI Update ---
function loadQuestion(index) {
    if (!questions || !questions[index]) {
        console.error("Question object is undefined at index: " + index, 'Questions array:', questions);
        if (questionText) questionText.textContent = "Error: Question data missing at index " + index;
        if (optionsContainer) optionsContainer.innerHTML = '';
        return;
    }
    currentIndex = index;
    if (currentQDisplay && totalQDisplay) {
        currentQDisplay.textContent = index + 1;
        totalQDisplay.textContent = questions.length;
        console.log('Progress updated: Question', index + 1, 'of', questions.length);
    }
    if (questionText) {
  let qText = questions[index].question;
  if (window.getTranslatedQuestion) {
    qText = window.getTranslatedQuestion(qText);
  }
  questionText.textContent = qText;
}
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        const optionsKeys = ['a', 'b', 'c', 'd'];
        optionsKeys.forEach(key => {
            const optionText = questions[index].options[key];
            if (!optionText) return;
            const label = document.createElement('label');
            const input = document.createElement('input');
            const span = document.createElement('span');
            input.type = 'radio';
            input.name = 'answer';
            input.value = key;
            span.textContent = optionText;
            label.appendChild(input);
            label.appendChild(span);
            optionsContainer.appendChild(label);
        });
    }
    const savedAnswer = answers[index];
    if (savedAnswer) {
        const radio = document.querySelector(`input[name="answer"][value="${savedAnswer}"]`);
        if (radio) radio.checked = true;
    }
    if (backBtn) backBtn.disabled = index === 0;
    if (nextBtn) nextBtn.textContent = index === questions.length - 1 ? 'Submit Test' : 'Next →';
}

// --- Event Handlers ---
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        const selected = document.querySelector('input[name="answer"]:checked');
        if (selected) {
            answers[currentIndex] = selected.value;
        } else {
            answers[currentIndex] = null;
        }
        localStorage.setItem('testAnswers', JSON.stringify(answers));
        if (currentIndex === questions.length - 1) {
            submitTest(false);
        } else {
            currentIndex++;
            loadQuestion(currentIndex);
        }
    });
}

if (backBtn) {
    backBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            loadQuestion(currentIndex);
        }
    });
}

if (optionsContainer) {
    optionsContainer.addEventListener('change', () => {
        const selected = document.querySelector('input[name="answer"]:checked');
        if (selected) {
            answers[currentIndex] = selected.value;
            localStorage.setItem('testAnswers', JSON.stringify(answers));
        }
    });
}

// --- Submission Logic ---
function submitTest(isTimeOut) {
    if (timerInterval) clearInterval(timerInterval);
    localStorage.removeItem('timeRemaining');
    localStorage.removeItem('timerHidden');
    localStorage.setItem('testTimeout', isTimeOut ? 'true' : 'false');
    window.location.href = 'results.html';
}
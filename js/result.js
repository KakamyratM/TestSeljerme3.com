// result.js
document.addEventListener('DOMContentLoaded', () => {
    // Retrieve data from localStorage
    const userName = localStorage.getItem('user_name') || 'Student';
    const userSurname = localStorage.getItem('user_surname') || '';
    const topic = localStorage.getItem('topic') || 'Unknown';
    const storedAnswers = localStorage.getItem('testAnswers');
    const isTimeout = localStorage.getItem('testTimeout') === 'true';

    // Map topic codes to display names (from settings select options)
    const topicDisplayNames = {
        'Pre-Algebra-1': 'Pre-Algebra: Basics',
        'Pre-Algebra-2': 'Pre-Algebra: Numbers & Decimals',
        'Pre-Algebra-3': 'Pre-Algebra: Rates & Ratios',
        'Algebra1-1': 'Algebra 1: Linear Equations',
        'Algebra1-2': 'Algebra 1: Functions & Exponents',
        'Algebra2-1': 'Algebra 2: Advanced Equations',
        'Algebra2-2': 'Algebra 2: Logarithms & Complex Numbers',
        'Geometry-1': 'Geometry: Shapes & Proofs',
        'Geometry-2': 'Geometry: Measurement & Transformations',
        'PreCalculus-1': 'Pre-Calculus: Functions & Limits',
        'PreCalculus-2': 'Pre-Calculus: Trigonometry & Calculus Intro'
    };

    const displayTopic = topicDisplayNames[topic] || topic;

    // Load questions based on topic (same logic as test.js)
    let questions = [];
    switch (topic) {
        case 'Pre-Algebra-1': questions = PreAlgebra1Questions; break;
        case 'Pre-Algebra-2': questions = PreAlgebra2Questions; break;
        case 'Pre-Algebra-3': questions = PreAlgebra3Questions; break;
        case 'Algebra1-1': questions = Algebra1Questions; break;
        case 'Algebra1-2': questions = Algebra1_2Questions; break;
        case 'Algebra2-1': questions = Algebra2Questions; break;
        case 'Algebra2-2': questions = Algebra2_2Questions; break;
        case 'Geometry-1': questions = GeometryQuestions; break;
        case 'Geometry-2': questions = Geometry2Questions; break;
        case 'PreCalculus-1': questions = PreCalculus1Questions; break;
        case 'PreCalculus-2': questions = PreCalculus2Questions; break;
        default:
            console.error('Unknown topic:', topic);
            questions = []; // Fallback
    }

    if (questions.length === 0) {
        document.body.innerHTML = '<p>Error loading questions. <a href="intro.html">Go Home</a></p>';
        return;
    }

    // Parse answers
    let answers = [];
    if (storedAnswers) {
        answers = JSON.parse(storedAnswers);
        // Ensure answers array matches questions length
        answers = answers.slice(0, questions.length).concat(new Array(Math.max(0, questions.length - answers.length)).fill(null));
    } else {
        answers = new Array(questions.length).fill(null);
    }

    // Calculate overall score
    let totalCorrect = 0;
    const subtopicCounts = {};

    questions.forEach((q, index) => {
        const userAnswer = answers[index];
        const isCorrect = userAnswer === q.correct;
        if (isCorrect) totalCorrect++;

        const subtopic = q.topic || 'General';
        if (!subtopicCounts[subtopic]) {
            subtopicCounts[subtopic] = { total: 0, correct: 0 };
        }
        subtopicCounts[subtopic].total++;
        if (isCorrect) subtopicCounts[subtopic].correct++;
    });

    const totalQuestions = questions.length;
    const overallPercentage = Math.round((totalCorrect / totalQuestions) * 100);
    const scoreMessage = getScoreMessage(overallPercentage);

    // Update DOM for user and overall
    document.getElementById('userFullName').textContent = `${userName} ${userSurname}`;
    document.getElementById('overallPercentage').textContent = `${overallPercentage}%`;
    document.getElementById('scoreDetails').textContent = `${totalCorrect} / ${totalQuestions} correct`;
    document.getElementById('scoreMessage').textContent = isTimeout ? 'Time ran out! Review and try again.' : scoreMessage;
    document.getElementById('selectedTopic').textContent = displayTopic;

    // Generate subtopics list
    const subtopicsList = document.getElementById('subtopicsList');
    const sortedSubtopics = Object.keys(subtopicCounts).sort();
    sortedSubtopics.forEach(subtopic => {
        const counts = subtopicCounts[subtopic];
        const subPercentage = Math.round((counts.correct / counts.total) * 100);
        const filledBoxes = Math.round((subPercentage / 100) * 6);

        const subDiv = document.createElement('div');
        subDiv.className = 'subtopic-item';
        subDiv.innerHTML = `
            <h3 class="subtopic-name">${subtopic}</h3>
            <div class="progress-boxes">
                ${Array.from({ length: 6 }, (_, i) => `<div class="box ${i < filledBoxes ? 'full' : 'empty'}"></div>`).join('')}
            </div>
            <p class="subtopic-score">${counts.correct} / ${counts.total} (${subPercentage}%)</p>
        `;
        subtopicsList.appendChild(subDiv);
    });

    // Optional: Clear localStorage after displaying results
    // localStorage.clear(); // Uncomment if you want to reset everything

    function getScoreMessage(percentage) {
        if (percentage >= 90) return 'Excellent! You\'re mastering this topic.';
        if (percentage >= 80) return 'Great work! Keep building on this.';
        if (percentage >= 70) return 'Solid performance. A bit more practice will help.';
        if (percentage >= 60) return 'Good effort. Focus on the weak areas.';
        return 'Room for improvement. Review the subtopics below.';
    }
});
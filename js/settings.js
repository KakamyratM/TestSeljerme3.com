document.addEventListener('DOMContentLoaded', () => {
    // DOM element references
    const settingsForm = document.getElementById('settingsForm');
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const topicInput = document.getElementById('topic');
    const nameError = document.getElementById('name-error');
    const surnameError = document.getElementById('surname-error');
    const modal = document.getElementById('settingsModal');
    const openButton = document.getElementById('openSettingsModal');
    const closeButton = document.getElementById('closeSettingsModal');

    function openModal() {
        modal.classList.add('open');
        document.body.classList.add('modal-open-body');
    }

    function closeModal() {
        modal.classList.remove('open');
        document.body.classList.remove('modal-open-body');
        settingsForm.reset();
        nameInput.classList.remove('input-error-state');
        surnameInput.classList.remove('input-error-state');
        topicInput.classList.remove('input-error-state');
        nameError.textContent = '';
        surnameError.textContent = '';
    }

    if (openButton) {
        openButton.addEventListener('click', openModal);
    }
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    function validateName(input, errorElement, isSurname = false) {
        const value = input.value.trim();
        
        const nameRegex = /^[A-Z][a-z]{1,}(?: [A-Z][a-z]+)*$/;
        const surnameRegex = /^[A-Z][a-zA-Z\s'-]*$/;

        let errorMessage = '';
        const minLength = 2;

        if (value.length < minLength) {
            errorMessage = `${isSurname ? 'Surname' : 'Name'} must be at least ${minLength} characters.`;
        } else if (isSurname) {
            if (!surnameRegex.test(value)) {
                errorMessage = 'Surname must start with a capital letter (e.g., "Smith" or "O\'Malley").';
            }
        } else {
            if (!nameRegex.test(value)) {
                errorMessage = 'First Name must use letters only and start with a capital, e.g., "Alex".';
            }
        }

        errorElement.textContent = errorMessage;

        if (errorMessage) {
            input.classList.add('input-error-state');
            return false;
        } else {
            input.classList.remove('input-error-state');
            return true;
        }
    }

    nameInput.addEventListener('input', () => validateName(nameInput, nameError));
    surnameInput.addEventListener('input', () => validateName(surnameInput, surnameError, true));

    settingsForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const isNameValid = validateName(nameInput, nameError);
        const isSurnameValid = validateName(surnameInput, surnameError, true); 
        
        const topic = topicInput.value;
        const isTopicSelected = (topic !== "");

        if (!isTopicSelected) {
            topicInput.focus();
            topicInput.classList.add('input-error-state');
            return;
        } else {
            topicInput.classList.remove('input-error-state');
        }

        if (isNameValid && isSurnameValid && isTopicSelected) {
            const trimmedName = nameInput.value.trim();
            const trimmedSurname = surnameInput.value.trim();
            localStorage.setItem('user_name', trimmedName);
            localStorage.setItem('user_surname', trimmedSurname);
            localStorage.setItem('topic', topic);

            // Debug: Check console
            console.log('Stored:', { name: trimmedName, surname: trimmedSurname, topic });

            localStorage.removeItem('testAnswers');
            localStorage.removeItem('timeRemaining');

            window.location.href = 'test.html';
        } else {
            if (!isNameValid) nameInput.focus();
            else if (!isSurnameValid) surnameInput.focus();
        }
    });
});

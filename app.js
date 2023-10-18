
function validateForm() {

    const form = document.querySelector('#form');
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const cpassword = document.querySelector('#cpassword');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(validateInputs()) {
            // Form is valid, you can submit it here or perform other actions.
            window.location.href = 'html/login.html';
        }
    });
 
    function validateInputs() {
        const usernameVal = username.value.trim();
        const emailVal = email.value.trim();
        const passwordVal = password.value.trim();
        const cpasswordVal = cpassword.value.trim();
        let isValid = true;

        if (usernameVal === '') {
            setError(username, 'Username is required');
            isValid = false;
        } else {
            setSuccess(username);
        }

        if (emailVal === '') {
            setError(email, 'Email is required');
            isValid = false;
        } else if (!validateEmail(emailVal)) {
            setError(email, 'Enter a valid Email');
            isValid = false;
        } else {
            setSuccess(email);
        }

        if (passwordVal === '') {
            setError(password, 'Password is required');
            isValid = false;
        } else if (passwordVal.length < 8) {
            setError(password, 'Password must be at least 8 characters');
            isValid = false;
        } else {
            setSuccess(password);
        }

        if (cpasswordVal === '') {
            setError(cpassword, 'Please confirm the password');
            isValid = false;
        } else if (cpasswordVal !== passwordVal) {
            setError(cpassword, 'Password does not match');
            isValid = false;
        } else {
            setSuccess(cpassword);
        }

        return isValid;
    }

    function setError(element, message) {
        const inputGroup = element.parentElement;
        const errorElement = inputGroup.querySelector('.error');

        errorElement.innerText = message;
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success');
    }

    function setSuccess(element) {
        const inputGroup = element.parentElement;
        const errorElement = inputGroup.querySelector('.error');

        errorElement.innerText = '';
        inputGroup.classList.add('success');
        inputGroup.classList.remove('error');
    }

    function validateEmail(email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    }
}

// Call the validateForm function to set up the form validation.
validateForm();

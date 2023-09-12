const form = document.getElementById('form-deposito');
const valorA = document.getElementById('valor-a');
const valorB = document.getElementById('valor-b');
const errorMessage = document.querySelector('.error-message');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

            if (parseInt(valorA.value) < parseInt(valorB.value)) {

                errorMessage.style.display = 'none';
                successMessage.style.display = 'block';

                form.reset();
            } else {
                // The condition is not met; display an error message.
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none'; 
            }
});



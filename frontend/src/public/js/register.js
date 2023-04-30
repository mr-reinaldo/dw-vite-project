const form = document.querySelector('form.needs-validation');
const btnCancel = document.querySelector('button#btnCancel');
const btnRegister = document.querySelector('button#btnRegister');


// Adiciona o evento de click no botão de cancelar
btnCancel.addEventListener('click', (event) => {
    event.preventDefault();

    // Redireciona para a página de login.
    window.location.href = '/';
});


// Adiciona o evento de click no botão de cadastro.
btnRegister.addEventListener('click', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
        event.stopPropagation();
    }

    form.classList.add('was-validated');
});
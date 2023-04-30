const form = document.querySelector('form.needs-validation');
const btnLogin = document.querySelector('button#btnLogin');
const btnRegister = document.querySelector('button#btnRegister');

// Adiciona o evento de click no botão de login
btnLogin.addEventListener('click', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
        event.stopPropagation();
    }

    form.classList.add('was-validated');

});


// Adiciona o evento de click no botão de cadastro
btnRegister.addEventListener('click', (event) => {
    event.preventDefault();

    // Redireciona para a página de cadastro.
    window.location.href = '/register';

});

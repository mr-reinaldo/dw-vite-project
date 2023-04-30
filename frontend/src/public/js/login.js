const form = document.querySelector('form#formLogin');
const btnLogin = document.querySelector('form#formLogin button#btnLogin');
const btnRegister = document.querySelector('form#formLogin button#btnRegister');

// Adiciona o evento de click no botão de login
btnLogin.addEventListener('click', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
        event.stopPropagation();
    }

    form.classList.add('was-validated');

    // window.location.href = '/home';

});


// Adiciona o evento de click no botão de cadastro
btnRegister.addEventListener('click', (event) => {
    event.preventDefault();

    // Redireciona para a página de cadastro.
    window.location.href = '/register';

});

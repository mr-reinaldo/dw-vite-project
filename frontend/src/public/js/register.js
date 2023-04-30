const form = document.querySelector('form#formRegister');
const btnCancel = document.querySelector('form#formRegister button#btnCancel');
const btnRegister = document.querySelector('form#formRegister button#btnRegister');


// Adiciona o evento de click no botão de cancelar
if (btnCancel) {
    btnCancel.addEventListener('click', (event) => {
        event.preventDefault();

        // Redireciona para a página de login.
        window.location.href = '/';
    });
}


// Adiciona o evento de click no botão de cadastro.
if (btnRegister) {
    btnRegister.addEventListener('click', (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    });
}
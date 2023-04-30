//======================================================
// Inline HTML Template
//======================================================

const Register = () => {

    return /*html*/`
<div class="container mt-5" id="registerPage">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card shadow bg-light">
                <div class="card-header bg-success text-white text-center fw-bold">
                    Cadastro
                </div>
                <div class="card-body m-4">
                    <form class="needs-validation" novalidate id="formRegister">
                        <label for="nomeUsuario" class="fw-bold">Nome de Usuário:</label>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="senha"><i class="bi bi-person-circle"></i></span>
                                <input type="text" class="form-control" placeholder="Digite seu Nome" aria-label="Nome de Usuário"
                                    aria-describedby="senha" name="nomeUsuario" required>
                                 <!-- Bloco de Validação -->
                                <div class="invalid-feedback">
                                    Por favor, digite seu nome de usuário.
                                </div>
                                
                            </div>
                        </div>
                        <label for="emailCadastro" class="fw-bold">Email:</label>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="senha"><i class="bi bi-envelope-at-fill"></i></span>
                                <input type="email" class="form-control" placeholder="Digite seu Email" aria-label="Email de Cadastro"
                                    aria-describedby="Email" name="emailCadastro" required>
                                    <!-- Bloco de Validação -->
                                <div class="invalid-feedback">
                                    Por favor, digite um email válido.
                                </div>
                            </div>
                        </div>
                        <label for="senhaCadastro" class="fw-bold">Senha:</label>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="senha"><i class="bi bi-key-fill"></i></span>
                                <input type="password" class="form-control" placeholder="Digite sua senha" aria-label="Senha de Cadastro"
                                    aria-describedby="senha" name="senhaCadastro" minlength="6" required>
                                     <!-- Bloco de Validação -->
                                <div class="invalid-feedback">
                                    Por favor, digite uma senha acima de 6 caracteres ou mais.
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <button type="button" class="btn btn-danger w-100" id="btnCancel"><i class="bi bi-person-fill-x"></i>
                                Cancelar
                                </button>
                            </div>
                            <div class="col-md-6">
                                <button type="button" class="btn btn-success w-100" id="btnRegister"><i class="bi bi-person-fill-add"></i>
                                Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
};

export default Register;


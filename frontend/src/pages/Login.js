const Login = () => {
    return /*html*/ `
<div class="container mt-5" id="loginPage">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card w-100 shadow bg-light">
                <div class="card-header bg-primary text-white text-center fw-bold">
                    Login
                </div>
                <div class="card-body m-5 vh-50">
                    <form class="needs-validation" novalidate>
                        <div class="form-group">
                            <label for="email" class="fw-bold">Email:</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="email"><i class="bi bi-envelope-at-fill"></i></span>
                                <input type="email" class="form-control" placeholder="Digite seu email" aria-label="Email de Login"
                                    name="emailLogin" aria-describedby="email" required>
                                <!-- Bloco de Validação -->
                                <div class="invalid-feedback">
                                    Por favor, digite um email válido.
                                </div>
                            </div>
                        </div>
                        <label for="senha" class="fw-bold">Senha:</label>
                        <div class="form-group mb-4">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="senha"><i class="bi bi-key-fill"></i></span>
                                <input type="password" class="form-control" placeholder="Digite sua Senha" aria-label="Senha de Login"
                                    aria-describedby="senha" name="senhaLogin" required>
                                <!-- Bloco de Validação -->
                                <div class="invalid-feedback">
                                    Por favor, digite uma senha válida.
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <button type="button" class="btn btn-primary w-100 fw-bold" id="btnLogin"><i class="bi bi-door-open"></i>
                                Entrar
                                </button>
                            </div>

                            <div class="col-md-6">
                                <button type="button" class="btn btn-warning w-100 fw-bold" id="btnRegister"><i class="bi bi-person-plus"></i>
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
}

export default Login;
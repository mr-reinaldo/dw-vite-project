const Login = () => {
    return /*html*/ `
<div class="container mt-5" id="loginPage">
    <div class="row">
        <div class="col-md-6 mb-4">
            <div class="card w-100 shadow bg-light">
                <div class="card-header bg-primary text-white text-center fw-bold">
                    Login
                </div>
                <div class="card-body m-5">
                    <form id="loginForm">
                        <div class="form-group">
                            <label for="email" class="fw-bold">Email:</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="email"><i class="bi bi-envelope-at-fill"></i></span>
                                <input type="email" class="form-control" placeholder="Digite seu email" aria-label="Email de Login"
                                    name="emailLogin" aria-describedby="email" required>
                            </div>
                        </div>
                        <label for="senha" class="fw-bold">Senha:</label>
                        <div class="form-group mb-4">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="senha"><i class="bi bi-key-fill"></i></span>
                                <input type="password" class="form-control" placeholder="Digite sua Senha" aria-label="Senha de Login"
                                    aria-describedby="senha" name="senhaLogin" required>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary w-100 fw-bold"><i class="bi bi-door-open"></i> Entrar</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card w-100 shadow bg-light">
                <div class="card-header bg-success text-white text-center fw-bold">
                    Cadastro
                </div>
                <div class="card-body m-4">
                    <form id="cadastroForm">
                        <label for="nomeUsuario" class="fw-bold">Nome de Usuário:</label>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="senha"><i class="bi bi-person-circle"></i></span>
                                <input type="text" class="form-control" placeholder="Digite seu Nome" aria-label="Nome de Usuário"
                                    aria-describedby="senha" name="nomeUsuario" required>
                            </div>
                        </div>
                        <label for="emailCadastro" class="fw-bold">Email:</label>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="senha"><i class="bi bi-envelope-at-fill"></i></span>
                                <input type="email" class="form-control" placeholder="Digite seu Email" aria-label="Email de Cadastro"
                                    aria-describedby="Email"  name="emailCadastro" required>
                            </div>
                        </div>
                        <label for="senhaCadastro" class="fw-bold">Senha:</label>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="senha"><i class="bi bi-key-fill"></i></span>
                                <input type="password" class="form-control" placeholder="Digite sua senha" aria-label="Senha de Cadastro"
                                    aria-describedby="senha" name="senhaCadastro" required>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-success w-100 "><i class="bi bi-person-fill-add"></i> Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
`;
}

export default Login;
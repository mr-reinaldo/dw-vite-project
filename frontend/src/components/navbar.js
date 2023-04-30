const navbar = () => {
    return /*html*/`
<nav class="navbar navbar-expand-lg bg-light shadow mb-4" data-bs-theme="dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="/home">Monitor App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="/home">Página Principal</a>
                <a class="nav-link" href="/about">Sobre</a>
            </div>
        </div>
    </div>

</nav>`;
}


export default navbar;
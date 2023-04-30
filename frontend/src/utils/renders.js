import navbar from '../components/navbar.js';

class ContentRenderer {
    constructor(target, options = {}) {
        // Define o elemento alvo onde o conteúdo será renderizado.
        this.target = target;

        // Define a variável que indica se a navbar já foi renderizada.
        this.navbarRendered = !options.renderNavbar;

        // Cria um objeto para armazenar os scripts já carregados.
        this.loadedScripts = {};
    }

    render(content, scriptSrc = '') {
        // Renderiza a navbar, se ela ainda não foi renderizada.
        if (!this.navbarRendered) {
            // Insere a navbar no início do body.
            document.body.insertAdjacentHTML('afterbegin', navbar());

            // Define que a navbar já foi renderizada.
            this.navbarRendered = true;
        }

        // Renderiza o conteúdo no alvo definido.
        this.target.innerHTML = content;

        // Carrega o script, se ele ainda não foi carregado.
        if (scriptSrc && !this.loadedScripts[scriptSrc]) {

            // Cria um elemento script e o adiciona ao body.
            const script = document.createElement('script');

            // Define o atributo type como module.
            script.type = 'module';

            // Define o atributo src com o caminho do script.
            script.src = scriptSrc;

            // Adiciona o script ao body.
            document.body.appendChild(script);

            // Define que o script já foi carregado.
            this.loadedScripts[scriptSrc] = true;
        }
    }
}

export default ContentRenderer;
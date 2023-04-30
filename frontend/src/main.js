// Global CSS.
import './style.css';

// Bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Bootstrap Icons.
import 'bootstrap-icons/font/bootstrap-icons.css';

// Importando utilitários.
import ContentRenderer from './utils/renders.js';
import router from './utils/routes.js';


// Instanciando a div #app.
const app = document.querySelector('#app');

// Importando a página Home.
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import HomePage from './pages/Home.js';
import AboutPage from './pages/About.js';


// Configurando o renderizador de conteúdo.
const contentRendererAuth = new ContentRenderer(app, { renderNavbar: false });
const contentRendererPages = new ContentRenderer(app, { renderNavbar: true });


// Configurando as rotas.
router.on({
    '/': () => {
        contentRendererAuth.render(Login(), '/js/login.js');
    }
});

router.on({
    '/register': () => {
        contentRendererAuth.render(Register(), '/js/register.js');
    }
});

router.on({
    '/home': () => {
        contentRendererPages.render(HomePage(), '');
    }
});

router.on({
    '/about': () => {
        contentRendererPages.render(AboutPage(), '');
    }
});

router.resolve();
// Global CSS.
import './style.css';

// Bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Bootstrap Icons.
import 'bootstrap-icons/font/bootstrap-icons.css';

// Importando utilitários.
import render from './utils/render.js';
import renderWithScript from './utils/renderWithScript.js';
import router from './utils/routes.js';

// Instanciando a div #app.
const app = document.querySelector('#app');

// Importando a página Home.
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import AboutPage from './pages/About.js';


// Definindo as rotas.
//router.on('/', () => render(Login(), app));
router.on('/', () => renderWithScript(Login(), app, '/js/login.js'));
router.on('/register', () => renderWithScript(Register(), app, '/js/register.js'));
router.on('/about', () => render(AboutPage(), app));

// Inicializando o Navigo e renderizando a página inicial.
router.resolve();
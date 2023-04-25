// Global CSS.
import './style.css'

// Bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importando utilitários.
import render from './utils/render.js';
import router from './utils/routes.js';

// Instanciando a div #app.
const app = document.querySelector('#app');

// Importando a página Home.
import InitPage from './pages/Init.js';
import HomePage from './pages/Home.js';
import AboutPage from './pages/About.js';


// Definindo as rotas.
router.on('/', () => render(InitPage(), app));
router.on('/home', () => render(HomePage(), app));
router.on('/about', () => render(AboutPage(), app));

// Inicializando o Navigo e renderizando a página inicial.
router.resolve();
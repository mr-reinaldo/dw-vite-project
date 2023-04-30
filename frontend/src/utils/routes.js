import Navigo from 'navigo';

/**
 * Crianção de uma instância do Navigo para gerenciar as rotas.
 * 
 * @param {string} "/" - Rota raiz.
 * @param {boolean} hash - Define se o Navigo deve usar hash nas rotas.
 * @param {string} linksSelector - Seletor para os links.
 */
const router = new Navigo("/", { hash: false, linksSelector: 'a[href^="/"]' });


export default router;
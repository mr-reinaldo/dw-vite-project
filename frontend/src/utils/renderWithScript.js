// Função para renderizar o componente e adicionar tag script com o src de um arquivo js.
const renderWithScript = (content, target, scriptSrc) => {

    // Limpa o conteúdo do elemento target.
    target.innerHTML = content;

    // Cria um elemento script.
    const script = document.createElement('script');

    // Adiciona o atributo src ao elemento script.
    script.src = scriptSrc;

    // Adiciona o elemento script como filho do elemento target.
    target.appendChild(script);
}


export default renderWithScript;
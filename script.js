// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    // Função para filtrar produtos
    function filtrarProdutos() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const produtos = document.querySelectorAll('.produto');

        produtos.forEach(produto => {
            const nomeProduto = produto.querySelector('p.nome-produto').textContent.toLowerCase();
            if (nomeProduto.includes(searchInput)) {
                produto.style.display = 'block';
            } else {
                produto.style.display = 'none';
            }
        });
    }

    // Adiciona o evento de input ao campo de pesquisa
    const searchInputElement = document.getElementById('searchInput');
    if (searchInputElement) {
        searchInputElement.addEventListener('input', filtrarProdutos);
    } else {
        console.error('O campo de pesquisa com o ID "searchInput" não foi encontrado.');
    }
});

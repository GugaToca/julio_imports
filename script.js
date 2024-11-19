// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.lista-produtos'); // Contêiner onde os produtos serão exibidos

    // Função para carregar produtos do JSON
    function carregarProdutos() {
        fetch('produtos.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar produtos.json');
                }
                return response.json();
            })
            .then(products => {
                exibirProdutos(products);
            })
            .catch(error => console.error('Erro ao carregar produtos:', error));
    }

    // Função para exibir produtos no DOM
    function exibirProdutos(products) {
        productList.innerHTML = ''; // Limpa a lista de produtos antes de exibir
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('produto');

            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p class="nome-produto">${product.name}</p>
                <p>Preço: R$ ${product.price.toFixed(2)}</p>
                ${product.promotion ? `<p class="promo-banner">${product.promotion}</p>` : ''}
            `;

            productList.appendChild(productDiv);
        });

        // Reaplica o filtro, caso o usuário já tenha digitado algo
        filtrarProdutos();
    }

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

    // Chama a função para carregar os produtos ao iniciar
    carregarProdutos();
});

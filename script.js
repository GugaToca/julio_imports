document.getElementById('adicionarProduto').addEventListener('click', () => {
    const imagemInput = document.getElementById('importarImagem');
    const precoInput = document.getElementById('importarPreco');
    const listaProdutos = document.getElementById('listaProdutos');

    if (imagemInput.files.length > 0 && precoInput.value.trim() !== '') {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');

        const imagem = document.createElement('img');
        imagem.src = URL.createObjectURL(imagemInput.files[0]);
        produtoDiv.appendChild(imagem);

        const preco = document.createElement('p');
        preco.textContent = `Preço: R$ ${precoInput.value}`;
        produtoDiv.appendChild(preco);

        listaProdutos.appendChild(produtoDiv);

        // Resetar os campos
        imagemInput.value = '';
        precoInput.value = '';
    } else {
        alert('Por favor, selecione uma imagem e insira um preço.');
    }
});

// Passo 1: Encontrar o elemento HTML onde os cards serão adicionados
let divProdutos = document.getElementById("produtos");

// Passo 2: Fazer a requisição para a API
fetch('https://fakestoreapi.com/products')
  .then(respostadaAPI => respostadaAPI.json()) // Transforma a resposta da API em um objeto JavaScript
  .then(data => {
    // Passo 4: Criar um novo card (div) para cada produto
    for (let i = 0; i < data.length; i++) {
   let produto = data[i]; // Pegue o produto na posição 'i'

    let novoCard = document.createElement('div');
    novoCard.className = 'card';
    novoCard.style.width = '18rem';

    novoCard.innerHTML = `
      <img src="${produto.image}" class="card-img-top" alt="${produto.title}">
      
      <div class="card-body">

        <h5 class="card-title">${produto.title}</h5>

        <p class="card-text">${produto.description}</p>
        
        <a href="#" class="btn btn-primary">Detalhes</a>

      </div>
    `;

      // Passo 6: Adicionar o novo card à divProdutos
      divProdutos.appendChild(novoCard);
    }
  });
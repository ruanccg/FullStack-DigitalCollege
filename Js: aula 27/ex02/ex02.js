// Passo 1: Encontrar o elemento HTML onde os cards serão adicionados
const prateleira = document.getElementById("produtos");

// Passo 2: Fazer a requisição para a API
fetch('https://fakestoreapi.com/products')
  .then(response => response.json()) // Transforma a resposta da API em um objeto JavaScript
  .then(data => {
    // Passo 3: Percorrer o array de produtos
    data.forEach(produto => {
      // Passo 4: Criar um novo card (div) para cada produto
      const novoCard = document.createElement('div');
      novoCard.className = 'card';
      novoCard.style.width = '18rem';

      // Passo 5: Preencher o conteúdo do card com as informações do produto
      novoCard.innerHTML = `
        <img src="${produto.image}" class="card-img-top" alt="${produto.title}">
        <div class="card-body">
          <h5 class="card-title">${produto.title}</h5>
          <p class="card-text">${produto.description}</p>
          <a href="#" class="btn btn-primary">Detalhes</a>
        </div>
      `;

      // Passo 6: Adicionar o novo card à prateleira
      prateleira.appendChild(novoCard);
    });
  });
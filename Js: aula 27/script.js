let novoProduto = {
    id: 15,
    title: 'Camiseta',
    price: 150.00,
    description: "Camiseta cinza, mangalonga.",
    category: "Camisetas",
    image: 'www.algumacoisa.com'

};

fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(novoProduto)
})

.then(resposta => resposta.json())
.then(dados => console.log('Produto criado:', dados))
.catch(erro => console.error('Erro:', erro))
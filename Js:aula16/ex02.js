// Peça ao usuário um número de produtos que serão passados na compra. 

// Faça um loop for para pedir todos os valores dos produtos e some para mostrar ao usuário o total da compra.

let quantidadeProdutos = Number(prompt("Digite quantos produtos você comprou:")); // Solicitar ao usuário a quantidade de produtos que ele comprou
let total = 0;

// 1) Começamos com 0 quantidades.

// 2) Enquanto a quantidade for menor ou igual a quantidade de produtos que ele colocou, vai executar o código.

// 3) Enquanto estiver sendo executado, vamos iterar de 1 em 1.

// 4) Depois mostrar a quantidade de vezes
for (let quantidade = 1 ; quantidade <= quantidadeProdutos ; quantidade++ ) {

    // Mostra a quantidade de produtos que o usuário adicionou
    console.log(quantidade)

    // Aqui pede o valor de cada produto
    let valor = Number(prompt("Qual o valor do produto?"))
    
    // O total começou em 0, depois foi adicionando os valores de cada produto ao total
    total = total + valor
}

    // Aqui mostra o valor do total
    console.log(`Total da compra: R$ ${total.toFixed(2)}`);
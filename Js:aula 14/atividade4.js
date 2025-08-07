/*
2) Um sistema de uma loja de roupas tem descontos baseados na cor das etiquetas de preço.

O caixa para informar o valor final das peças ao cliente precisa procurar a ocorrência exata da cor de acordo com a tabela abaixo:

vermelho : 30% de desconto 
verde: 15% de desconto
amarelo: 5% de desconto

Outras cores de etiqueta terão o valor da peça EXATAMENTE igual ao valor da etiqueta.
*/

// Informação inicial
alert("Estamos com descontos imperdíveis baseados na cor da etiqueta.")

// Variáveis para cor da etiqueta e valor inicial
let coretiqueta = prompt("Informe a cor da etiqueta:\n [1] - Vermelho; \n [2] - Verde; \n [3] - Amarelo.")
let valorinicial = Number(prompt("Qual o valor da peça?"))

if (coretiqueta === "vermelho"){
    desconto = 0.30
    alert(`O valor final da sua peça é: R$ ${valorfinal.toFixed(2)}`);
}
else if (coretiqueta === "verde"){
    desconto = 0.15
    alert(`O valor final da sua peça é: R$ ${valorfinal.toFixed(2)}`);
}
else if (coretiqueta === "amarelo"){
    desconto = 0.05
    alert(`O valor final da sua peça é: R$ ${valorfinal.toFixed(2)}`);
}
else{
    desconto = 0
    alert(`Você não recebeu nenhum desconto!`)
}

let valorfinal = valorinicial - (valorinicial * desconto)


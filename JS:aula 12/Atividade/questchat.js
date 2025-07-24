// Desafio: Calculadora de Reajuste no Ingresso de Cinema

// 1) Você vai criar um pequeno programa que:

// a) Pede o valor atual do ingresso
// b) Pede a porcentagem do reajuste
// c) Calcula o novo valor do ingresso
// d) Mostra um alert() com a frase:

let valorIngresso = Number(prompt("Qual o valor do ingresso?"))
let porcentagem = Number(prompt("Qual o valor de porcentagem?"))

let reajuste = valorIngresso * ( porcentagem/100 )
let novoValor = valorIngresso + reajuste

alert(`O novo valor do ingresso, com reajuste de ${porcentagem}%, é R$ ${novoValor.toFixed(2)} `)
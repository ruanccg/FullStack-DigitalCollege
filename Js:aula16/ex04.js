// Faça um programa que receba um número.

// E usando laços de repetição calcule e mostre a tabuada desse número


// Aqui vamos receber o número do usuário
let numero = Number(prompt("Vamos praticar a tabuada de multiplicação? \n Informe um número:"));
let nInicio = 1;
let final = 10;


for (let inicio = nInicio; inicio <= final; inicio++) {

    let operacao = numero * inicio
    console.log(` A multiplicação entre ${numero}*${inicio}=${operacao}`)

}
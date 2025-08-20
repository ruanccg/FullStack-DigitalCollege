// crie uma função que receba 2 números. 

// Caso o primeiro número seja maior que o segundo, exiba no console a mensagem "O primeiro número é maior que o segundo".

// Caso o primeiro número seja menor que o segundo, exiba no console a mensagem "O primeiro número é menor que o segundo".

// Caso os números sejam iguais, exiba no console a mensagem "Os números são iguais".

//após a definição execute a função para testar


let num1 = Number(prompt("Informe um número:"));
let num2 = Number(prompt("Informe mais um número:"));

function compararNumeros() {
    if (num1 > num2) {
        alert(`O primeiro número: ${num1} é maior que o segundo:${num2}`)
    }
    else if (num1 < num2){
        alert(`O primeiro número: ${num1} é menor que o segundo:${num2}`)
    }
    else{
        alert(`Os números são iguais!`)
    }
}

compararNumeros()
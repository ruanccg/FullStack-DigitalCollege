// Faça um algoritmo que leia um número e informe se ele é par ou ímpar.

let numero = Number(prompt("Informe um número e descubra se ele é par ou ímpar:"))

if(numero % 2 === 0 ) {
    alert(`O número ${numero} que você digitou é par!`)
}

else {
    alert(`O número ${numero} que você digitou é ímpar!`)
}
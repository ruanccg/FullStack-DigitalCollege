// Faça um algoritmo que leia dois valores inteiros A e B. 
// Se os valores for iguais deverão se somar os dois, caso contrário, multiplique A por B.

let A = Number(prompt("Informe um número inteiro:"))
let B = Number(prompt("Informe mais um número inteiro:"))

if(A === B){
    let soma = A + B
    alert(`Soma: ${soma}`)
}
else {
    let multiplicacao = A * B 
    alert(`Multiplicação: ${multiplicacao}`)
}
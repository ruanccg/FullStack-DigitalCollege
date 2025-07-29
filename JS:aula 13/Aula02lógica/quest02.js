// Escreva um algoritmo que leia três valores. A, B, C. E informe se a soma de A + B é maior que C.

let A = Number(prompt("Informe um número:"))
let B = Number(prompt("Informe outro número:"))
let C = Number(prompt("Informe mais um número:"))

let soma = A + B

if(soma > C) {
    alert(`A soma entre A+B=${soma}, sendo maior que C=${C}!`)
}

else if (soma < C) {
    alert(`A soma entre A+B=${soma}, sendo menor que C=${C}!`)
}

else {
    alert("Você informou números impossíveis de encontrar um resultado para a questão!")
}
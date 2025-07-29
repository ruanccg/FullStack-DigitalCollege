// Leia dois números e informe os maiores deles.

let num1 = Number(prompt("Digite um número:"))
let num2 = Number(prompt("Digite outro número:"))

if(num1>num2) {
    alert(`O número ${num1} é maior que o número ${num2}!`)
}

else if(num1<num2) {
    alert(`O número ${num2} é maior que o número ${num1}!`)
}

else {
    alert(`O número 1:${num1}, e o número 2:${num2} são iguais!`)
}
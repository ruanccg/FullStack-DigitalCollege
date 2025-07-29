/* O IMC – Índice de Massa Corporal é um prêmio da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

A fórmula é IMC = peso / (altura)². 

Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo.

Abaixo de 18,5: Abaixo do peso

Entre 18,5 e 25: Peso normal

Entre 25 e 30: Acima do peso

Acima de 30: Obeso*/

let peso = Number(prompt("Informe o seu peso:"))
let altura = Number(prompt("Informe a sua altura:"))

let calculoimc = peso / ( altura ** 2 )

if (calculoimc < 18.5){
    alert(`Você está abaixo do peso!`)
}
else if (calculoimc >= 18.5 && calculoimc < 25){
    alert(`Seu peso é normal!`)
}
else if (calculoimc >= 25 && calculoimc <= 30){
    alert(`Você está acima do peso!`)
}
else{
    alert(`Você está obeso!`)
}
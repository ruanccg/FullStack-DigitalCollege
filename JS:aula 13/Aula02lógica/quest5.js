// Faça um algoritmo que leia uma variável.
// Some 5 caso seja par ou some 8 caso seja ímpar, e imprima o resultado desta operação.

let numero = Number(prompt("Informe um número. Caso seja par vai somar 5, e caso seja ímpar vai somar 8 "))


if(numero % 2 == 0) {
    let soma1 = numero + 5
    alert(`O resultado é par, então ${numero}+5= ${soma1}`)
}
else{
    let soma2 = numero + 8
     alert(`O resultado é ímpar, então ${numero}+8= ${soma2}`)
}
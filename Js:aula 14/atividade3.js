/* 
1) Leia um número fornecido pelo usuário.

Se esse número for positivo e par, calcule a raiz quadrada do número.

Se esse número for positivo e ímpar, calcule o número elevado a terceira potência.

Se o número for negativo ou um NaN mostre uma mensagem dizendo que a entrada do usuário é inválida.
*/

// Dúvidas: Como indicar se o número é positivo ou negativo? > 0 (Positivo) < 0 (Negativo)

let numero = Number(prompt("Informe um número:"))

alert("Se esse número for positivo e par, vamos calcular a sua raiz quadrada. \nSe esse número for positivo e ímpar, vamos calcular o seu número elevado ao cubo.")

if(numero > 0 && numero%2 === 0){
    let raizquadrada = Math.sqrt(numero)
    alert(`A raiz quadrada de ${numero} é:${raizquadrada.toFixed(2)}`)
}
else if (numero > 0 && numero%2 === 1){
    let exponenciacao = Math.pow(numero,2)
    alert(`O cubo de ${numero} é:${exponenciacao}`)
}
else if(numero < 0 || isNaN(numero)){
    alert (`O seu número é inválido.`)
}
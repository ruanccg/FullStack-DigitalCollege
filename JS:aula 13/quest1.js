// Peça ao usuário dois números e imprima no console se o número 1 é maior ou menor que o número 2.

/* criar duas variáveis e atribuir o valor a elas atraves do prompt
 ( na mensagem do prompt informar que o número deve ser passado em formato numérico e não por extenso)
criar a estrutura condicional para avaliar se o número 1 é maior ou menor que o número 2 */

// operadores de comparação
// == igual
// != diferente
// > maior
// < menor
// >= maior ou igual
// <= menor ou igual

let num1 = Number(prompt("Digite um número sem ser por extenso:"))
let num2 = Number(prompt("Digite o segundo número sem ser por extenso:"))

if(num1 > num2){
    console.log(`O ${num1} é maior que o ${num2}.`)
}
else{
    console.log(`O ${num1} é menor que o ${num2}.`)
}



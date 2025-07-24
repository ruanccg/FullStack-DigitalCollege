// Leia o salário de um funcionário e exiba o novo salário deste funcionário com um aumento de 20%

let salario = Number(prompt("Qual o seu salário?"));
let aumento = salario * 0.20;
let novoSalario = salario + aumento;

console.log(`O novo salário com 20% de aumento é: R$ ${novoSalario.toFixed(2)}`);

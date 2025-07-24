// Leia três notas, calcule sua média e a exiba para o usuário

let nota1 = Number(prompt("Qual sua primeira nota?"));
let nota2 = Number(prompt("Qual a sua segunda nota?"));
let nota3 = Number(prompt("Qual a sua terceira nota?"));

let media = (nota1 + nota2 + nota3) / 3;

alert(`Sua média geral é ${media.toFixed(2)}`);
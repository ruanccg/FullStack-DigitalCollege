// Leia o raio de um círculo e calcule sua área 
// (Área do círculo: pi * raio ao quadrado) 

let raio = Number(prompt("Qual o raio do seu círculo?"));

let calculoArea = Math.PI * Math.pow(raio, 2);

console.log(`A área do seu círculo é: ${calculoArea.toFixed(2)}`);
// Crie um loop que imprima apenas os números pares do intervalo de 0 a 50

/*let numero = 0


while (numero % 2 === 0 && numero <= 50 ) {
    console.log(numero)
    // Atualização do número 
    numero += 2
}*/


// Correção

let numero = 0

while (numero <= 50 ) {
    if(numero % 2 === 0){
    console.log(numero)
    }
    // Atualização a condição de parada 
    numero ++
}
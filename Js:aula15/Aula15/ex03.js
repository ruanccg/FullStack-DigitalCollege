//Escreva um algoritmo que exiba todos os números pares de 0 ao número passado pelo usuário (utilize prompt).

let numerouser = Number(prompt("Informe um número e veja os pares que o antecedem. ")) // 3 

let pares = 0

while (pares <= numerouser) {
    if(pares % 2 === 0){
    console.log(pares)
    }
    pares ++
}


// let numero = 0

// while (numero <= 50 ) {
//     if(numero % 2 === 0){
//     console.log(numero)
//     }
//     // Atualização a condição de parada 
//     numero ++
// }
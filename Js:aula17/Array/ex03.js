// Crie uma lista (array) de atividades.

// Será pedido ao usuário quantas atividades serão colocadas na lista.

// A cada vez que o usuário digitar uma nova atividade para ser adiciona na lista, ela sempre será adicionada no começo da lista.


let Atividades = ['Correr', 'Estudar', 'Trabalhar', 'Brincar']

let novasAtividades = (prompt("Quantas atividades novas deseja inserir na lista?"))

for (let atividades = 1; atividades <= novasAtividades; atividades++) {
    let atualização = prompt("Digite a nova atividade:")
    Atividades.unshift(atualização)
}

console.log(Atividades)


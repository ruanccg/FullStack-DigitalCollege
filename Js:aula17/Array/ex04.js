// O Banco do Cleitinho distribuiu 8 senhas . Existe uma fila de atendimento.

// let atendimento =  ['Maria', 'João', 'Paula', 'Joana', 'Ana', 'Joaquim', 'Pedro', 'Igor', 'Helena', 'Karen']

//Chegando uma prioridade ( Cliente Personalitê  passará na frente de todos os demais na ordem de chegada)
// let clienteEspecial = 'Helena de Manuel Carlos'

//Depois de adicionar a cliente especial, qual seria a ordem de pessoas atendidas? Considerando as 8 senhas na fila.

//Imprima no console todos os nomes dos 8

let atendimento =  ['Maria', 'João', 'Paula', 'Joana', 'Ana', 'Joaquim', 'Pedro', 'Igor', 'Helena', 'Karen']

let clienteEspecial = 'Helena de Manuel Carlos'
let jaAtendidos = []

// agora o Cleitinho precisa armazenar em um array os clientes na ordem que eles foram atendidos.

//  Faça uma adaptação no código acima, para que assim que o usuário for retirado do ínicio da fila de atendimento, seja adicionado ao final da lista de jaAtendidos

atendimento.unshift(clienteEspecial)
console.log(atendimento)
let qtdSenhas = 8

for(let senha = 1; senha<= qtdSenhas; senha++ ){
    let pessoaAtendida = atendimento.shift()
    console.log(pessoaAtendida)
}

for (let   = 0; index < array.length; index++) {

    
}




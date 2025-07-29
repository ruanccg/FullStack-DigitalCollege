/*Atividade 1

Uma locadora quer duas informações básicas para o seu sistema. 

Ela quer com base nessas informações exibir se o carro pode ser alugado ou não.

idade do motorista
se e habilitado ou não

caso as duas condições sejam verdadeiras, exibir que o carro pode ser alugado ok

caso uma das condições seja falsa, exibir que o carro nao pode ser alugado.

A idade do motorista deve ser maior ou igual a 18 anos. */

let idade = Number(prompt("Informe a sua idade:"))
let cnh = Number(prompt("Você é habilitado?\n [1] - Sim \n [2] - Não"))

if(idade >= 18 && cnh == 1){
    alert(`Você pode alugar o seu carro!`)
}
else if(idade < 18 || cnh == 2){
    alert(`Prezamos muito pela sua segurança! Sua idade é inferior a 18 anos ou você não tem cnh, por esse motivo você não pode alugar um carro!`)
}

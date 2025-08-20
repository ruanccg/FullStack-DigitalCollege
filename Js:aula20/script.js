let conta = {
  titular: "Maria Silva",
  numero: "12345-6",
  agencia: "001",
  saldo: 1000,
  limiteEmprestimo: 5000,
  divida: 0
};

//1) Crie as 4 funções, uma para cada operação, que recebam os parâmetros e retornem o objeto com as informações atualizadas

// as operações possíveis serão funções com parâmetros e com retornos

// depositar(qualConta, valor), retorno qualConta (com as informações atualizadas)

// sacar(qualConta, valor)  retorno qualConta (com as informações atualizadas)

// emprestar(qualConta, valor)  retorno qualConta (com as informações atualizadas)

// pagarDivida(qualConta, valor)  retorno qualConta (com as informações atualizadas)

function depositar(qualConta, valor){
    qualConta.saldo = qualConta.saldo + valor
    return qualConta
}

depositar(conta, 300)

function sacar(qualConta, valor) {
    qualConta.saldo = qualConta.saldo - valor
    return qualConta
}

sacar(conta, 200)

function emprestar(qualConta, valor) {
    qualConta.limiteEmprestimo = qualConta.limiteEmprestimo - valor
    qualConta.saldo += valor
    qualConta.divida += valor
    return qualConta
}

emprestar(conta, 100)

function pagarDivida(qualConta, valor) {
    depositar(qualConta, valor)
    sacar(qualConta, valor)

    return qualConta
}

pagarDivida(conta, 500)

//crie uma função que espera receber 3 parâmetros:

//objConta, operação(função de callback), valor

//caixaEletronico(conta2, depositar, 100)


function caixaEletronico(qualConta, operação, valor) {
    operação(qualConta, valor)
}

caixaEletronico(conta, depositar, 2000)
caixaEletronico(conta, sacar, 500)
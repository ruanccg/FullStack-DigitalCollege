//A cada mudança de valor dos campos de input ( use o evento change ), atualize o valor do parágrafo com o somatorio dos valores dos inputs

//representar todos os objetos dos inputs
//representar o parágrafo

//criar uma variável para armazenar o somatorio

//criar uma função para atualizar o valor do somatório
//atualizar o parágrafo a cada mudança


let entrada = document.querySelector('#entrada')
let pratoPrincipal = document.querySelector('#pratoPrincipal')
let sobremesa = document.querySelector('#sobremesa')
let bebida = document.querySelector('#bebida')
let totalConta = document.querySelector('#totalConta')


function atualizarValor() {
    let valorEntrada = Number(entrada.value)
    let valorPratoprincipal = Number(pratoPrincipal.value)
    let valorSobremesa = Number(sobremesa.value)
    let valorBebida =  Number(bebida.value)


    let soma = valorEntrada + valorPratoprincipal + valorSobremesa + valorBebida

    totalConta.textContent = "Total: R$ " + soma
}


entrada.onchange = atualizarValor
pratoPrincipal.onchange = atualizarValor
sobremesa.onchange = atualizarValor
bebida.onchange = atualizarValor




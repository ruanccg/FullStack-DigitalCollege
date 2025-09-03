/*Quando clicar no botão a div com classe lousa deverá ficar com o bg da cor do botão.

Quando o mouse for passado em cima da div a cor original deverá ser aplicada ao bg*/


let botaoVermelho = document.querySelector('#vermelho')
let botaoAzul = document.querySelector('#azul')
let botaoVerde = document.querySelector('#verde')
let divLousa = document.querySelector('.divLousa')


function aplicarCor(cor) {
    divLousa.style.background = cor
}



function apagarTudo() {
    divLousa.style.background = "rgb(233, 227, 227)"
}

botaoVermelho.addEventListener('click', () => aplicarCor('red'))
botaoAzul.addEventListener('click', () => aplicarCor('blue'))
botaoVerde.addEventListener('click', () => aplicarCor('green'))
divLousa.addEventListener('mouseover',() => aplicarCor('rgb(233, 227, 227)'))

/*Quando clicar no botão a div com classe lousa deverá ficar com o bg da cor do botão.

Quando o mouse for passado em cima da div a cor original deverá ser aplicada ao bg*/


let botaoVermelho = document.querySelector('#vermelho')
let botaoAzul = document.querySelector('#azul')
let botaoVerde = document.querySelector('#verde')
let divLousa = document.querySelector('.divLousa')


function aplicarCor(cor) {
    divLousa.style.background = cor
}

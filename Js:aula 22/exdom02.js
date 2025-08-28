//para um documento html com elementos que possuem a mesma classe faça a seleção de todos os elementos com essa classe e aplique a cor vermelha para o style no atributo color dos elementos

//document.getElementsByClassName -> retorna um htmlcollection com os elementos da pagina

//crie uma função que percorre o htmlCollectiion e faz a manipulação da propriedade color dos elementos, usando um loop

let textos = document.getElementsByClassName('ex02')
i = 0;

while (i < textos.length) {
    textos[i].style.color = 'red'
    i++
}


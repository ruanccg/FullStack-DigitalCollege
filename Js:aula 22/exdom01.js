//crie uma página com um título  e através da execução de um script peça o nome do usuário e troque pelo conteúdo do titulo 1

//use o prompt para obter o nome do usuário

//document.getElementsByTagName -> retorna um htmlcollection com os elementos da pagina

//elemento.innerHTML - altera o conteudo do elemento

let nome = prompt("Qual o seu nome?");

let titulo = document.getElementsByTagName('h1')[0]

titulo.innerHTML = nome
//crie uma tag ol no documento html e adicione um id
//selecione esse objeto e faça a adição de 5 itens passados pelo usuário para serem renderizados na tela como itens numerados

//dentro do loop de repetição:
//peça ao usuário um texto e concatene com o conteudo do innerHTML do objeto selecionado


//minhalista.innerHtml+= `novotexto interno a tag`
//minhalista.innerHtml+= `<li>${Texto digitado pelo usuario}</li>`


let listaFrutas = document.getElementById('frutas')

for (let index = 0; index < 5; index++) {
    let novaFruta = prompt('Informe uma fruta:')

    listaFrutas.innerHTML += `<li>${novaFruta}</li>`
}
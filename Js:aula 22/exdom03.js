//selecione o objeto com id 'importante' (getElementById) e altere o html interno a tag selecionada e aplique o conteúdo de texto passado pelo prompt dentro de uma tag strong

//peça ao usuario um texto

//seleciona o objeto com id 'importante'

//altera o html interno da tag selecionada usando innerHTML

// insira um strong e dentro dele insira o texto digitado pelo usuario


let id = document.getElementById('importante')
let text = prompt('Informe um texto:')

id.innerHTML = `<strong>${text}</strong>`


//peça ao usuário a quantidade de tarefas que ele vai fazer no dia.
//execute um script que crie uma lista e dentro da lista as atividades ( de acordo com o número passado pelo usuário) com o texto de cada uma delas

/*
nº atividades 3

<ul>
    <li> texto atividade 1 </li>
    <li> texto atividade 3 </li>
    <li> texto atividade 4 </li>
</ul>
*/


let quantidadeTarefas = prompt('Quantas atividades você irá realizar hoje?')
let ol = document.createElement('ol'); // Cria a lista ordenada fora do loop


for (let index = 0; index < quantidadeTarefas; index++) {
    let atividades = prompt('Digite as atividades que irá realizar:') // Pede a descrição de cada atividade
    
    let liElement = document.createElement('li'); // Crie um item de lista
    
    liElement.textContent = atividades; // Define o texto do item de lista
    
    ol.appendChild(liElement); // Adiciona o item de lista à lista ordenada
}

document.body.appendChild(ol); // Adiciona a lista ordenada ao corpo do documento

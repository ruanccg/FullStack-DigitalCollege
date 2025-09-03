//crie um novo documento html com um style interno (head) contendo as classes: 

//urgente : bg vermelho, fonte branca e negrito
//naoUrgente: fonte preta e bg verde claro

//nor arquivo de script crie um programa que execute a seguinte tarefa:

//peça ao usuário a quantidade de atividades para o dia

//a cada atividade faça 2 perguntas:
//o texto da atividade
//se a atividade é urgente ou não.

//se atividade for urgente, crie o elemento, adicione o texto, insira na lista de classes a classe urgente

// se a atividade não for urgente faça o mesmo processo mas adicione a classe naoUrgente.

// * dica: utilize os métodos createElement, appendChild, classList.add()

let quantidadeTarefas = prompt('Quantas atividades você irá realizar hoje?')


for (let index = 0; index <= quantidadeTarefas; index++) {
    let pergunta1 = prompt('Digite as atividades que irá realizar:') // Pede a descrição de cada atividade
    let pergunta2 = prompt('É urgente ou não?') // Pergunta se a atividade é urgente ou não

    if (pergunta2 == urgente) {
    
    let atividadeUrgente = document.querySelector('.urgente') // Seleciona a classe
    atividadeUrgente.textContent = pergunta1; // Define o texto dentro da caixa
    
    }
    else{

    let atividadeNaourgente = document.querySelector('.naoUrgente') // Seleciona a classe
    atividadeNaourgente.textContent = pergunta1; // Define o texto dentro da caixa
    }

}

document.body.appendChild(); // Adiciona ao documento



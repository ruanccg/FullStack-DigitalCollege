// você foi contratado para desenvolver o chatbot da Digital College
// você deve dar a opção do usuário de escolher entre as seguintes opções de curso, para receber o contato da coordenação:
// 1 - desenvolvimento full stack 
// 2 - marketing digital
// 3 - analise de dados

// caso a opção digitada não seja uma das opções acima, exibir a mensagem abaixo:
// você não digitou uma opção valida, entre em contato com o setor de vendas

alert("Olá, seja bem-vindo(a) nossa plataforma. A seguir escolha o curso que deseja cursar conosco. Será um prazer!");

let curso = prompt("Digite o número do curso desejado: \n 1 - desenvolvimento full stack \n 2 - marketing digital \n 3 - análise de dados");

switch (curso) {
    case '1':
        alert("Você escolheu o curso de Desenvolvimento Full Stack. A coordenação entrará em contato em breve.")
        break;
    case '2':
        alert("Você escolheu o curso de Marketing Digital. A coordenação entrará em contato em breve.")
        break;
    case '3':
        alert("Você escolheu o curso de Análise de Dados. A coordenação entrará em contato em breve.")
        break;
    default:
        alert("Você não digitou uma opção valida, entre em contato com o setor de vendas. Número (99) 99999-8888.")
        break;
}


// você foi contratado para desenvolver o chatbot da Digital College
// você deve dar a opção do usuário de escolher entre as seguintes opções de curso, para receber o contato da coordenação:
// 1 - desenvolvimento full stack 
// 2 - marketing digital
// 3 - analise de dados

// caso a opção digitada não seja uma das opções acima, exibir a mensagem abaixo:
// você não digitou uma opção valida, entre em contato com o setor de vendas

alert("Olá, seja bem-vindo(a) nossa plataforma. A seguir escolha o curso que deseja cursar conosco. Será um prazer!");

let curso = prompt("Digite o número do curso desejado:\n1 - desenvolvimento full stack\n2 - marketing digital\n3 - análise de dados");

if(curso == "1"){
    ("Você escolheu o curso de Desenvolvimento Full Stack. A coordenação entrará em contato em breve.")
} 
else if (curso == "2"){
    alert("Você escolheu o curso de Marketing Digital. A coordenação entrará em contato em breve.")
}
else if (curso == "3"){
    alert("Você escolheu o curso de Análise de Dados. A coordenação entrará em contato em breve.")
}
else{
    alert("Você não digitou uma opção valida, entre em contato com o setor de vendas")
};


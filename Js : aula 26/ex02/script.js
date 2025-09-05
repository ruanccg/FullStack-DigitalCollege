//crie uma função que consome a api the cat api e gere uma imagem aleatória dentro da div divGatinho. Essa função será executada quando o botão for clicado.

//utilize o método document.createElement e o método apendChild para adicionar a imagem a div
//utilize a propriedade url do objeto resposta da api, para o src da imagem 
//utilize um envento para o objeto botão com o método addEventListener


// Seleciona a div com o id "divImagem" e a armazena na variável 'divGatinho'
let divGatinho = document.querySelector("#divImagem")

// Seleciona o botão com o id "btnGatinho" e o armazena na variável 'botaoGatinho'
let botaoGatinho = document.querySelector("#btnGatinho")

// Define a função que será executada quando o botão for clicado

function mostrarImagem() {
    
     // Armazena o endereço (URL) da API em uma variável
    let url = "https://api.thecatapi.com/v1/images/search"
    // Exibe o endereço no console do navegador (útil para depurar)
    console.log(url)

    // Inicia a requisição para a API usando 'fetch'
    fetch(url)
        // O primeiro '.then' recebe a resposta da API (ainda não em JSON)
        .then(function(resposta){
            // Converte a resposta para o formato JSON
            resposta.json().then(function(dados){
                // Exibe os dados recebidos no console (aqui estão as informações da imagem)
                console.log(dados)
                // Cria um novo elemento de imagem no HTML
                let imagemGatinho = document.createElement("img")
                // Define a fonte da imagem (src) com a URL que veio dos dados da API
                imagemGatinho.src = dados[0].url
                imagemGatinho.style.width = '400px'
                // Adiciona a imagem já pronta (com a fonte definida) dentro da div
                divGatinho.appendChild(imagemGatinho)

            })
        })
        // O '.catch' captura qualquer erro que ocorra durante a requisição
        .catch(function(erro){
            // Exibe uma mensagem de erro no console, se algo der errado
            console.log("ocorreu um erro ao buscar os dados!", erro)
        })

}

// Adiciona um "ouvinte de eventos" ao botão: quando for clicado, a função 'mostrarImagem' será chamada
botaoGatinho.addEventListener("click", mostrarImagem);
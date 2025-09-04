function buscarCep() {
    let cep = prompt("Qual cep deseja buscar? ")
    let url = "https://brasilapi.com.br/api/cep/v2/" + cep
    console.log(url)

    fetch(url)
        .then(function(resposta){
            resposta.json().then(function(dados){
                console.log(dados)
                alert("Sua cidade é " + dados.city + ", no estado do " + dados.state)
            })
        })
        .catch(function(erro){
            console.log("ocorreu um erro ao buscar os dados!", erro)
        })

}

buscarCep()
function cadastrarUsuario(){
   const username = document.querySelector('#username').value

   const password = document.querySelector('#password').value
   
   const email = document.querySelector('#email').value

   const objetoUsuario = {
    username: username,
    password: password,
    email: email
   }
   
// Agora, a requisição POST para a API
  fetch('https://fakestoreapi.com/users', {
    method: 'POST', // Informa que o método da requisição é POST
    headers: {
      'Content-Type': 'application/json', // Informa à API que estamos enviando JSON
    },
    body: JSON.stringify(objetoUsuario), // Converte o objeto JavaScript para uma string JSON
  })
  .then(response => response.json())
  .then(data => {
    // A API vai retornar a resposta aqui.
    // 'data' vai ser o objeto do novo usuário criado
    console.log('Usuário cadastrado com sucesso!', data);
    alert('Usuário cadastrado com sucesso!');
  })
  .catch(error => {
    // Se algo der errado, a gente vai ver o erro aqui.
    console.error('Erro ao cadastrar usuário:', error);
    alert('Erro ao cadastrar usuário. Tente novamente.');
  });
}
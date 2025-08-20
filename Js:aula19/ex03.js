// crie uma função para calcular a média de um aluno.

// passe como parâmetro 3 notas.

//calcule a média:

//caso a média seja igual ou maior que 7 : retorne a string "Aprovado"

//caso a média esteja entre 6 e 4 : retorne a string "Recuperação"

//caso a média seja menor que 4 : retorne a string "Reprovado"

let nota1 = 10;
let nota2 = 8;
let nota3 = 9;

function calcularMedia(nota1,nota2,nota3) {
  
  let media = (nota1 + nota2 + nota3) / 3

  if (media < 4) {
    return ('Reprovado!')
  } 
  else if(media >= 4 && media <= 6 ){
    return ('Recuperação!')
  }
  else {
    return ('Aprovado!')
  }
}

// let resultado = calcularMedia(nota1,nota2,nota3)

console.log(calcularMedia(nota1,nota2,nota3))
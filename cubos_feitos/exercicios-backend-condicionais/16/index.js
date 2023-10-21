//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 16;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;

if (idadeDoAluno >= 18) {
    console.log("Rematrícula realizada com sucesso");
  } else if (possuiResponsavel) {
    console.log("Rematrícula realizada com acompanhamento de um responsável");
  } else {
    console.log("Não é possível fazer a rematrícula");
  }

  /*
  Explicação:
  
      Primeiro, temos duas constantes: idadeDoAluno e possuiResponsavel. Essas constantes poderiam ser alteradas para testar diferentes cenários.
      Em seguida, agora com uma condicional if...else if...else que avalia três casos:
          Se a idadeDoAluno for maior ou igual a 18, o programa imprime a mensagem “Rematrícula realizada com sucesso” no console.
          Se a idadeDoAluno for menor que 18, mas o possuiResponsavel for true, o programa imprime a mensagem “Rematrícula realizada com acompanhamento de um responsável” no console.
          Se a idadeDoAluno for menor que 18 e o possuiResponsavel for false, o programa imprime a mensagem “Não é possível fazer a rematrícula” no console.
  */
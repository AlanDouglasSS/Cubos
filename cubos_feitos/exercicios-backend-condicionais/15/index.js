const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

if (apelido) {
    console.log(apelido);
  } else if (sobrenome) {
    console.log(`${primeiroNome} ${sobrenome}`);
  } else {
    console.log(primeiroNome);
  }
  

  /*
  Explicação:
  
      Primeiro, temos três constantes: primeiroNome, sobrenome e apelido. Essas constantes poderiam ser alteradas para testar diferentes cenários.
      Em seguida, com uma estrutura condicional if...else if...else que avalia três casos:
          Se o apelido existir (ou seja, não for uma string vazia, null, undefined ou false), o programa imprime o apelido no console.
          Se o apelido não existir, mas o sobrenome existir, o programa imprime o primeiro nome e o sobrenome no console, separados por um espaço.
          Se o apelido e o sobrenome não existirem, o programa imprime apenas o primeiroNome no console.
       
  */
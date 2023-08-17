const cpf = "011.022.033-44";

function removerPontuacao(cpfOuCnpj) {
    // Expressão regular para remover a pontuação
    const regex = /\D/g;
  
    // Remover todos os caracteres não dígitos (pontuação)
    const cpfOuCnpjSemPontuacao = cpfOuCnpj.replace(regex, '');
  
    console.log(cpfOuCnpjSemPontuacao);
  }
  

  removerPontuacao(cpf); // 01102203344
  
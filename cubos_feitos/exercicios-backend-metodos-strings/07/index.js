const email = "aluno@cubos.academy";

function validarEmail(email) {
  // Expressão regular para validar o e-mail
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verificar se o e-mail atende à expressão regular
  if (regex.test(email)) {
    console.log("E-mail válido");
  } else {
    console.log("E-mail inválido");
  }
}

// Teste com o e-mail armazenado na constante
validarEmail(email);


function validarArquivo(nomeArquivo) {
    // Expressão regular para validar a extensão do arquivo
    const regex = /\.(jpg|jpeg|gif|png)$/i;
  
    // Verificar se a extensão do arquivo corresponde a uma das permitidas
    if (regex.test(nomeArquivo)) {
      console.log("Arquivo válido");
    } else {
      console.log("Arquivo inválido");
    }
  }
  
  // Teste com exemplos
  const nomeArquivoExemplo1 = 'Foto da Familia.pdf';
  const nomeArquivoExemplo2 = 'Foto da Familia.png';
  
  validarArquivo(nomeArquivoExemplo1); // Arquivo inválido
  validarArquivo(nomeArquivoExemplo2); // Arquivo válido
  
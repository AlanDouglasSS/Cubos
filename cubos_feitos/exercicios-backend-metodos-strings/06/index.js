
function formatarNumeroCelular(celular) {
    // Converter o número para string
    celular = celular.toString();
  
    // Verificar se o número tem DDD (dois primeiros dígitos)
    let ddd = "";
    if (celular.length > 8) {
      ddd = `(${celular.slice(0, 2)}) `;
      celular = celular.slice(2);
    }
  
    // Verificar se o número tem o nono dígito
    let nonoDigito = "";
    if (celular.length === 8) {
      nonoDigito = celular.slice(0, 1) + " ";
      celular = celular.slice(1);
    }
  
    // Formatar o número com o DDD e o nono dígito (se necessário)
    const numeroFormatado = ddd + nonoDigito + celular.slice(0, 4) + "-" + celular.slice(4);
  
    console.log(numeroFormatado);
  }
  
  // Teste com exemplos
  const celularExemplo1 = 7199918888;
  const celularExemplo2 = 99918888;
  
  
  formatarNumeroCelular(celularExemplo1); // (71) 9 9991-8888
  formatarNumeroCelular(celularExemplo2); // 9 9991-8888
  
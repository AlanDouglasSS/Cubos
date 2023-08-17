function transformarEmURLAmigavel(texto) {
    // Converter o texto para minúsculas
    texto = texto.toLowerCase();
  
    // Remover espaços e substituir por hífens
    texto = texto.replace(/\s+/g, '-');
  
    console.log(texto);
  }
  
  // Teste com exemplo
  const texto= "Aprenda programar do zero na Cubos Academy";
  transformarEmURLAmigavel(texto); // aprenda-programar-do-zero-na-cubos-academy
  
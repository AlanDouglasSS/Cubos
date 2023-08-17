function verificarComentario(comentario) {
    // Palavras proibidas
    const palavrasProibidas = ["pandemia", "covid"];
  
    // Converter o texto do comentário e as palavras proibidas para minúsculas
    const comentarioLower = comentario.toLowerCase();
    const palavrasProibidasLower = palavrasProibidas.map(palavra => palavra.toLowerCase());
  
    // Verificar se alguma das palavras proibidas está presente no comentário
    for (const palavra of palavrasProibidasLower) {
      if (comentarioLower.includes(palavra)) {
        console.log("Comentário bloqueado por conter palavras proibidas");
        return;
      }
    }
  
    console.log("Comentário autorizado");
  }
  
  // Teste com exemplo
  const comentario = "Esse COVID é muito perigoso!";
  verificarComentario(comentario);

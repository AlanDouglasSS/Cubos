const nome = 'Guido Cerqueira';

function gerarNickname(nome) {
    // Converter o nome para letras minúsculas
    nome = nome.toLowerCase();
  
    // Remover espaços em branco
    nome = nome.replace(/\s/g, '');
  
    // Limitar o nickname a 13 caracteres
    nome = nome.slice(0, 13);
  
    // Adicionar o "@" no início
    const nickname = `@${nome}`;
  
    console.log(nickname);
  }
  
 
  gerarNickname(nome); // @guidocerquei
  
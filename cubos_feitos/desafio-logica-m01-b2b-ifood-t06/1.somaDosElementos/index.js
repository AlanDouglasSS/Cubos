// Definição da função solucao
function solucao(lista) {
    let total = 0;
  
    // Loop para percorrer cada elemento da lista
    for (let i = 0; i < lista.length; i++) {
      // Soma o elemento atual ao total
      total += lista[i];
    }
  
    // Imprime o total no console
    console.log(total);
  }
  
  // Definição da função processData que recebe a entrada como string
  function processData(input) {
    // Divide a string de entrada em uma lista de strings separadas por espaço
    const strings = input.split(" ");
    const numeros = [];
  
    // Loop para percorrer cada elemento da lista de strings
    for (let i = 0; i < strings.length; i++) {
      // Converte cada string em um número inteiro e adiciona à lista de numeros
      numeros.push(parseInt(strings[i], 10));
    }
  
    // Chama a função solucao passando a lista de numeros como argumento
    solucao(numeros);
  }
  
  // Função de tratamento de entrada que concatena os dados de entrada em _input
  function handleInput(input) {
    _input += input;
  }
  
  // Função de tratamento de fim de entrada que chama a função processData com _input
  function handleEnd() {
    processData(_input);
  }
  
  // Ativa a entrada padrão (stdin) para leitura
  process.stdin.resume();
  
  // Define a codificação dos dados de entrada como ASCII
  process.stdin.setEncoding("ascii");
  
  // Variável _input para armazenar os dados de entrada
  let _input = "";
  
  // Evento de leitura de dados de entrada
  process.stdin.on("data", handleInput);
  
  // Evento de fim de entrada
  process.stdin.on("end", handleEnd);
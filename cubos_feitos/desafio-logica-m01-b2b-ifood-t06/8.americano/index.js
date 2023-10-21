function solucao(numeros) {
    // Obtém o tamanho do array de números jogados
    const N = numeros.length;
  
    // Variável para armazenar a soma de todos os números jogados
    let soma = 0;
  
    // Calcula a soma de todos os números jogados
    for (let i = 0; i < N; i++) {
      soma += numeros[i];
    }
  
    // Encontra o goleiro com base no processo do jogo
    // O goleiro estará na posição (soma - 1) % N + 1
    let posicao = (soma - 1) % N + 1;
  
    // Imprime a posição do goleiro
    console.log(posicao);
  }
  
  
  function processData(input) {
    // Essa função chamada "processData" recebe um parâmetro chamado "input".
  
    const strings = input.split(" ");
    // O parâmetro "input" é dividido em várias strings separadas por espaços em branco, usando o método "split".
    // Essas strings são armazenadas em um novo array chamado "strings".
  
    const numeros = [];
    // Um novo array chamado "numeros" é declarado.
  
    for (let i = 0; i < strings.length; i++) {
      // Um laço "for" é utilizado para percorrer cada elemento do array "strings".
  
      numeros.push(parseInt(strings[i] ,10));
      // Cada elemento do array "strings" é convertido em um número inteiro usando a função "parseInt".
      // O número inteiro é adicionado ao array "numeros" usando o método "push".
      // O segundo parâmetro "10" é usado para especificar a base numérica (decimal).
  
    }
  
    solucao(numeros);
    // A função "solucao" é chamada, passando o array "numeros" como argumento.
  }
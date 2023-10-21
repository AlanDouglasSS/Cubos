function solucao(carta) {
    // A função solucao recebe um parâmetro carta, que representa a carta escolhida
  
    const manilhas = {
      // Objeto manilhas que mapeia cada carta à sua respectiva manilha
      Q: "J",
      J: "K",
      K: "A",
      A: "2",
      2: "3",
      3: "Q"
    };
  
    const manilha = manilhas[carta] || "Carta inválida";
    // A variável manilha recebe o valor correspondente à carta no objeto manilhas.
    // Se a carta não estiver presente no objeto, o valor será undefined e a variável manilha receberá "Carta inválida" como valor padrão.
  
    console.log(manilha);
    // Imprime o valor da variável manilha no console
  }
  
  function processData(input) {
    // A função processData recebe um parâmetro input, que representa os dados de entrada
  
    solucao(input.trim());
    // Chama a função solucao, passando o valor do input como argumento e removendo os espaços em branco antes e depois da carta com o método trim()
  }
  
  process.stdin.resume();
  // Inicia a entrada padrão do processo
  
  process.stdin.setEncoding("ascii");
  // Define o encoding da entrada padrão como ascii
  
  _input = "";
  // Declaração da variável _input, que será usada para armazenar os dados de entrada
  
  process.stdin.on("data", function (input) {
    // Escuta o evento "data" da entrada padrão e executa a função anônima quando ocorrer
  
    _input += input;
    // Adiciona o valor do input à variável _input
  });
  
  process.stdin.on("end", function () {
    // Escuta o evento "end" da entrada padrão e executa a função anônima quando ocorrer
  
    processData(_input);
    // Chama a função processData
  });
  
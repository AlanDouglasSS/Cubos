function solucao(precos) {
    precos.sort((a, b) => a - b); // Ordena o array de preços em ordem crescente
  
    let totalAPagar = precos.reduce((acc, curr) => acc + curr, 0); // Calcula o total inicial a pagar
  
    if (precos.length >= 5) {
      totalAPagar -= precos[0]; // Subtrai o valor do produto mais barato, que é o primeiro elemento após a ordenação
    }
  
    console.log(totalAPagar);
  }
  
  function processData(input) {
    solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
  }
  
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  _input = "";
  process.stdin.on("data", function (input) {
    _input += input;
  });
  
  process.stdin.on("end", function () {
    processData(_input);
  });
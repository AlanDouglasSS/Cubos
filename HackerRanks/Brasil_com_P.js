function solucao(primeiraLetra, segundaLetra, palavras) {
    const palavrasEncontradas = palavras.filter(palavra => {
      return palavra.startsWith(primeiraLetra + segundaLetra);
    });
  
    if (palavrasEncontradas.length === 0) {
      console.log("NENHUMA");
    } else {
      palavrasEncontradas.forEach(palavra => console.log(palavra));
    }
  }
  
  function processData(input) {
    const { primeiraLetra, segundaLetra, palavras } = JSON.parse(input);
    solucao(primeiraLetra, segundaLetra, palavras);
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
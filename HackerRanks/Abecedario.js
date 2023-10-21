function solucao(letra, palavras) {
    const letraSorteada = letra.toLowerCase();
    let losingCount = 0;
  
    for (const palavra of palavras) {
      if (palavra.charAt(0) !== letraSorteada) {
        losingCount++;
      }
    }
  
    console.log(losingCount);
  }
  
  function processData(input) {
    const { letra, palavras } = JSON.parse(input)[0];
    solucao(letra, palavras);
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
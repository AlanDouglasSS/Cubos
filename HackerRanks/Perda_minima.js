function solucao(precos) {
    let minLoss = Infinity;
  
    for (let i = 0; i < precos.length; i++) {
      for (let j = i + 1; j < precos.length; j++) {
        if (precos[i] > precos[j]) {
          const loss = precos[i] - precos[j];
          minLoss = Math.min(minLoss, loss);
        }
      }
    }
  
    console.log(minLoss);
  }
  
  function processData(input) {
    const precos = input.split(" ").map(x => parseInt(x, 10));
    solucao(precos);
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
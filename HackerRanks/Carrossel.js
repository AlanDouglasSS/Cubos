function solucao(sequencia) {
    const carouselLength = 7; // Tamanho total do carrossel (7 imagens)
    let currentIndex = 0; // Índice inicial da imagem exibida (0 representa a primeira imagem)
  
    for (const click of sequencia) {
      if (click === '>') {
        currentIndex = (currentIndex + 1) % carouselLength; // Avança para a próxima imagem
      } else if (click === '<') {
        currentIndex = (currentIndex - 1 + carouselLength) % carouselLength; // Volta para a imagem anterior
      }
    }
  
    console.log(currentIndex);
  }
  
  function processData(input) {
    solucao(input.trim());
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
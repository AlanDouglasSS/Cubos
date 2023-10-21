function purifyName(name) {
  const purifiedName = name.replace(/[!@#$%&*()]/g, '');
  return purifiedName;
}

function solucao(stringCorrompida) {
  const wordsArray = stringCorrompida.split(' ');
  const purifiedWords = wordsArray.map(word => purifyName(word));
  const purifiedString = purifiedWords.join(' ');
  console.log(purifiedString);
}

function processData(input) {
  solucao(input);
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
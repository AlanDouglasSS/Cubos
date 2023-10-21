function solucao(notas) {
    
    notas.sort((a, b) => a - b);
    
    const notasDoMeio = notas.slice(1, -1);
    const media = notasDoMeio.reduce((acc, nota) => acc + nota, 0) / notasDoMeio.length;
    
    console.log(Math.floor(media));
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
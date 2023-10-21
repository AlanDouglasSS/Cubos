const jogada1 = 5;
const jogada2 = 3;

//seu código aqui

const escolha1 = "par"; // Pessoa 1 escolheu par
const escolha2 = "ímpar"; // Pessoa 2 escolheu ímpar

const soma = jogada1 + jogada2;

if ((soma % 2 === 0 && escolha1 === "par") || (soma % 2 !== 0 && escolha2 === "ímpar")) {
    console.log("par");
} else {
    console.log("ímpar");
}
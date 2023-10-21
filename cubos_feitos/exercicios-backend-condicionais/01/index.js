const jogo1 = "pedra";
const jogo2 = "tesoura";
const jogo3 = 'papel';

//seu código aqui

let jogador1 = jogo1
let jogador2 = jogo3

if (jogador1 === jogo1 && jogador2 === jogo2) {
    console.log(`O resultado foi "${jogo1}" e "${jogo2}": Ganhou ${jogo1}`);
} else if (jogador1 === jogo3 && jogador2 === jogo2) {
    console.log(`O resultado foi "${jogo3}" e "${jogo2}": Ganhou ${jogo2}`);
} else if (jogador1 === jogo1 && jogador2 === jogo3) {
    console.log(`O resultado foi "${jogo1}" e "${jogo3}": Ganhou ${jogo3}`);
} else if (jogador1 === jogador2) {
    console.log('Empate');
} else {
    console.log("Jogada inválida. Por favor, escolha entre pedra, tesoura ou papel.");
}
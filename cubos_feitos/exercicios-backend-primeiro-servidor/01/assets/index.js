//COMEÇAR!
const express = require('express');

const app = express();

function rodadas(jogadores){
    jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
    return jogadores;
}


let contador = 0;


app.get('/', (Requisicao, Resposta) => {
    
    const vez = rodadas();
    const rodadaAtual = vez[contador];

    contador = (contador + 1) % vez.length;

    Resposta.send(rodadaAtual);

})

app.listen(3000, () => {
    console.log('Conexão na porta 3000');
});
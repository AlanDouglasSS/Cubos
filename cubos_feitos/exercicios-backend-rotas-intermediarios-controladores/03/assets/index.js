// index.js
// O grande portão para o mundo mágico dos imóveis.

const express = require('express');
const app = express();

// Definindo o número da porta do castelo.
const PORT = 8000;

// Pegando o guia das rotas para explorar.
const roteador = require('./roteador');

// Apresentando o guia e mostrando o castelo ao público.
app.use('/', roteador);

// Abrindo o portão do castelo e dando boas-vindas aos aventureiros.
app.listen(PORT, () => {
    console.log(`O castelo mágico está aberto na porta ${PORT}!`);
});

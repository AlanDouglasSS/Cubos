const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let vezDeJogar = 0; // Índice para controlar a vez de jogar

// Rota principal para mostrar o próximo jogador
app.get('/', (req, res) => {
    const jogador = jogadores[vezDeJogar];
    vezDeJogar = (vezDeJogar + 1) % jogadores.length; // Passa a vez para o próximo jogador
    res.send(`É a vez de ${jogador} jogar!`);
});

// Rota para remover um jogador pelo índice
app.get('/remover', (req, res) => {
    const indice = parseInt(req.query.indice);
    
    if (isNaN(indice) || indice < 0 || indice >= jogadores.length) {
        res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`);
    } else {
        jogadores.splice(indice, 1);
        res.send(jogadores);
    }
});

// Rota para adicionar um jogador com opção de índice
app.get('/adicionar', (req, res) => {
    const nome = req.query.nome.charAt(0).toUpperCase() + req.query.nome.slice(1).toLowerCase();
    const indice = parseInt(req.query.indice);
    
    if (isNaN(indice) || indice < 0 || indice > jogadores.length) {
        res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`);
    } else {
        if (isNaN(indice)) {
            jogadores.push(nome);
        } else {
            jogadores.splice(indice, 0, nome);
        }
        res.send(jogadores);
    }
});

// Inicia o servidor na porta 8000
app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');
});
//Lista de convidados

// Importando o DJ da festa!
const express = require('express');
const bodyParser = require('body-parser');

// O salão da festa está pronto!
const app = express();
app.use(bodyParser.json());

// A pista de dança onde os convidados vão sambar
const convidados = [];

// Rota para mostrar a lista de convidados na festa
app.get('/convidados', (req, res) => {
    res.json(convidados);
});

// Rota para verificar se um convidado em específico está na festa
app.get('/convidados', (req, res) => {
    const nomeConsulta = req.query.nome;

    // Se o convidado não dançar na festa...
    if (nomeConsulta) {
        if (convidados.includes(nomeConsulta)) {
            res.json({ mensagem: 'Convidado presente.' });
        } else {
            res.json({ mensagem: 'O convidado buscado não está presente na pista.' });
        }
    } else { // Se não passar o nome, a lista completa é a sensação da noite!
        res.json(convidados);
    }
});

// Hora de chamar novos convidados pra festa!
app.post('/convidados', (req, res) => {
    const nomeNovoConvidado = req.body.nome;

    // Se o convidado já está na balada, não é VIP!
    if (convidados.includes(nomeNovoConvidado)) {
        res.json({
            mensagem: 'O nome do convidado a ser adicionado já está na lista. Se quiser convidar o xará, chama com o sobrenome também!'
        });
    } else { // Novo convidado na área, bota o nome dele na lista e bota pra dançar!
        convidados.push(nomeNovoConvidado);
        res.json({ mensagem: 'Convidado adicionado à festa!' });
    }
});

// Quando alguém quiser ir embora da festa, a gente manda pra casa!
app.delete('/convidados/:nome', (req, res) => {
    const nomeRemover = req.params.nome;

    // Se o convidado não está na festa, aí nem tem como expulsar, né?
    if (!convidados.includes(nomeRemover)) {
        res.json({ mensagem: 'O nome do convidado a ser removido não está na festa. Ninguém foi expulso.' });
    } else { // Mas se o nome bater com alguém na lista, tchauzinho pra ele!
        const index = convidados.indexOf(nomeRemover);
        convidados.splice(index, 1);
        res.json({ mensagem: 'Convidado expulso da festa!' });
    }
});

// E aí, tá pronto pra balada? Vai rolar a festa!
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`A pista está quente em http://localhost:${PORT}! 🎉🕺💃`);
});
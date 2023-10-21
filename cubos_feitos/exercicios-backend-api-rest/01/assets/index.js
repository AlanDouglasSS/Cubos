// index.js
// Bem-vindo à festa do cadastro de alunos! Prepare-se para rir e cadastrar.
const express = require('express');
const app = express();

// Definindo onde a festa acontecerá - porta 3000, a mais animada!
const PORT = 3000;

// Pegando o cardápio da festa (rotas) para orientar os participantes.
const roteador = require('./roteador');

// Conferindo a senha de entrada: "cubos123" (tente não ser barrado!)
app.use(verificarSenha);

// Mostrando o caminho da festa - siga o roteador para encontrar os cadastros.
app.use('/alunos', roteador);

// Abrindo as portas da festa e chamando todos os dançarinos (ouvintes).
app.listen(PORT, () => {
    console.log(`A festa está rolando na porta ${PORT}! Venha se divertir! 🎉🕺`);
});

// Função hilária para verificar a senha e liberar a entrada - ou não!
function verificarSenha(req, res, next) {
    const senha = req.query.senha;
    if (senha === 'cubos123') {
        console.log('Senha correta! Bem-vindo à festa!');
        next(); // Próximo da fila, por favor!
    } else {
        res.status(401).json({ mensagem: 'Acesso negado! Senha incorreta! 😜' });
    }
}
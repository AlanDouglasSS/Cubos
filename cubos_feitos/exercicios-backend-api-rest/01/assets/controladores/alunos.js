// controladores/alunos.js
// Bem-vindo aos bastidores! Os controladores garantem a diversão na pista!

// Importando os artistas - ops, quero dizer, os alunos!
const alunos = require('../dados/alunos');

// Mostrando a lista dos dançarinos - quero dizer, alunos!
function listarAlunos(req, res) {
    res.json(alunos);
}

// Encontrando o dançarino estrela pelo ID!
function buscarAlunoPorId(req, res) {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        res.status(400).json({ mensagem: 'ID deve ser um número válido! 😆' });
    } else {
        const aluno = alunos.find(a => a.id === id);
        if (aluno) {
            res.json(aluno);
        } else {
            res.status(404).json({ mensagem: 'Dançarino não encontrado! 🕺' });
        }
    }
}

// Adicionando um novo dançarino à festa!
function adicionarAluno(req, res) {
    const novoAluno = req.body;
    const campos = ['nome', 'sobrenome', 'idade', 'curso'];

    if (campos.some(campo => !novoAluno[campo])) {
        res.status(400).json({ mensagem: 'Faltam dados do dançarino! 🕺' });
    } else if (novoAluno.idade < 18) {
        res.status(400).json({ mensagem: 'Menores de 18 anos não podem dançar aqui! 😆' });
    } else {
        alunos.push(novoAluno);
        res.status(201).send();
    }
}

// Expulsando um dançarino da festa - e do array!
function expulsarAluno(req, res) {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        res.status(400).json({ mensagem: 'ID deve ser um número válido! 😆' });
    } else {
        const indice = alunos.findIndex(a => a.id === id);
        if (indice !== -1) {
            const alunoExpulso = alunos.splice(indice, 1)[0];
            res.status(200).json(alunoExpulso);
        } else {
            res.status(404).json({ mensagem: 'Dançarino não encontrado para expulsão! 🕺' });
        }
    }
}

// Exportando nossos dançarinos para o show!
module.exports = { listarAlunos, buscarAlunoPorId, adicionarAluno, expulsarAluno };
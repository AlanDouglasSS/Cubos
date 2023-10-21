// roteador.js
// Bem-vindo ao mapa da festa - aqui você encontra as rotas dos cadastros!

const express = require('express');
const router = express.Router();
const alunosControlador = require('./controladores/alunos');

// Rota da pista de dança dos alunos: GET para ver todos os cadastrados!
router.get('/', alunosControlador.listarAlunos);

// Rota para encontrar o dançarino estrela pelo ID - GET /alunos/1, /alunos/2, ...
router.get('/:id', alunosControlador.buscarAlunoPorId);

// Rota para adicionar novos dançarinos - POST /alunos
router.post('/', alunosControlador.adicionarAluno);

// Rota para expulsar o dançarino da festa - DELETE /alunos/1, /alunos/2, ...
router.delete('/:id', alunosControlador.expulsarAluno);

// Guia do evento - use o mapa (roteador) para chegar aos seus objetivos!
module.exports = router;
// roteador.js
// O grande mapa das rotas - guia para os aventureiros!

const express = require('express');
const router = express.Router();
const imoveisControlador = require('./controladores/imoveis');

// A trilha que leva aos tesouros - uhm, quero dizer, imóveis.
router.get('/imoveis', imoveisControlador.listarImoveis);

// Uma passagem para um tesouro específico, por favor.
router.get('/imoveis/:id', imoveisControlador.obterImovelPorId);

// Pegue seu guia e vamos explorar!
module.exports = router;
const express = require('express');
const router = express.Router();
const livrosController = require('../controladores/livrosController');

router.get('/', livrosController.consultarColecao);
router.get('/:id', livrosController.consultarLivroPorId);
router.post('/', livrosController.adicionarLivro);
router.put('/:id', livrosController.substituirLivro);
router.patch('/:id', livrosController.alterarLivro);
router.delete('/:id', livrosController.removerLivro);

module.exports = router;
const express = require('express');
const router = express.Router();
const autenticacaoMiddleware = require('../controllers/autenticacaoMiddleware');

// Middleware de autenticação aplicado em todas as rotas abaixo
router.use(autenticacaoMiddleware);

// Suas rotas aqui
router.get('/rota1', (req, res) => {
  res.send('Rota 1 autenticada');
});

router.get('/rota2', (req, res) => {
  res.send('Rota 2 autenticada');
});

module.exports = router;
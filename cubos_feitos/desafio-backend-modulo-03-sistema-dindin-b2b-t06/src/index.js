const express = require('express');
const app = express();
const rotas = require('./rotas/rotas.js');
const autenticacaoMiddleware = require('./controllers/autenticacaoMiddleware.js');

app.use(express.json());

// Middleware de autenticação aplicado em todas as rotas
app.use(autenticacaoMiddleware);

// Rotas
app.use(rotas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT}`);
});
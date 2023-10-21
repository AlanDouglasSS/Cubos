const express = require('express');
const app = express();
const livrosRouter = require('./roteadores/livros');

app.use(express.json());

app.use('/livros', livrosRouter);

app.listen(3000, () => {
  console.log('Servidor da Biblioteca Online rodando na porta 3000! 📚🎉');
});
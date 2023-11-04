const express = require('express');
const app = express();
const dbMiddleware = require('./rotas/conexao/conexao');

app.use(express.json());

// Registre o middleware de conexão com o banco de dados
app.use(dbMiddleware);

// Importe e registre as rotas criadas
const cadastrarAutorRouter = require('./rotas/querys/cadastro_autor');
const buscarAutorRouter = require('./rotas/querys/buscar_autor');
const cadastrarLivroRouter = require('./rotas/querys/cadastrar_livro');
const listaLivrosRouter = require('./rotas/querys/listar_livros');

app.use('/cadastro_autor', cadastrarAutorRouter);
app.use('/buscar_autor', buscarAutorRouter);
app.use('/cadastrar_livro', cadastrarLivroRouter);
app.use('/listar_livros', listaLivrosRouter);

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.listen(3000, () => {
  console.log('API rodando na porta 3000!');
});

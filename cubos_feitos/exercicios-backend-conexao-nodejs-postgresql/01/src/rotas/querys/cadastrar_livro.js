const express = require('express');
const router = express.Router(); // Cria um roteador para gerenciar as rotas

const cadastrarLivro = async (req, res) => {
  const autorId = req.params.id; // Obtém o ID do autor a partir dos parâmetros da URL
  const { nome, genero, editora, data_publicacao } = req.body; // Obtém os dados do livro do corpo da requisição

  if (!nome) {
    return res.status(400).json({ mensagem: 'O campo nome é obrigatório.' });
  } // Verifica se o campo 'nome' do livro foi fornecido na requisição e, se não, retorna um erro 400

  try {
    const result = await req.db.query(
      'INSERT INTO livros (nome, genero, editora, data_publicacao, autor_id) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [nome, genero, editora, data_publicacao, autorId]
    ); // Insere os dados do livro no banco de dados e retorna o ID do livro inserido

    const id = result.rows[0].id;
    return { id, nome, genero, editora, data_publicacao };
  } catch (error) {
    console.error(error);
    return { mensagem: 'Erro ao cadastrar livro.' }; // Em caso de erro, retorna uma mensagem de erro
  }
};

router.post('/autor/:id/livro', async (req, res) => {
  const livro = await cadastrarLivro(req, res); // Chama a função para cadastrar um livro e aguarda o resultado

  if (livro.id) {
    res.json(livro); // Se o livro for cadastrado com sucesso, retorna as informações do livro
  } else {
    res.status(500).json(livro); // Em caso de erro, retorna um código 500 e uma mensagem de erro
  }
});

module.exports = router; // Exporta o roteador com as rotas relacionadas ao cadastro de livros

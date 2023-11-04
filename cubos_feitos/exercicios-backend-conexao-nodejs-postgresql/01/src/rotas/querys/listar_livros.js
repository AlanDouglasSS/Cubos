const express = require('express');
const router = express.Router(); // Cria um roteador para gerenciar as rotas

// Rota para listar os livros
router.get('/livro', async (req, res) => {
  try {
    const result = await req.db.query(
      'SELECT livros.id, livros.nome as livro_nome, livros.genero, livros.editora, livros.data_publicacao, autores.id as autor_id, autores.nome as autor_nome, autores.idade FROM livros LEFT JOIN autores ON livros.autor_id = autores.id'
    ); // Executa uma consulta SQL para buscar informações sobre livros e seus autores

    const livros = result.rows.map((row) => ({
      id: row.id, // ID do livro
      nome: row.livro_nome, // Nome do livro
      genero: row.genero, // Gênero do livro
      editora: row.editora, // Editora do livro
      data_publicacao: row.data_publicacao, // Data de publicação do livro
      autor: {
        id: row.autor_id, // ID do autor
        nome: row.autor_nome, // Nome do autor
        idade: row.idade, // Idade do autor
      },
    })); // Mapeia os resultados da consulta para um formato mais conveniente

    res.json(livros); // Retorna a lista de livros com informações sobre os autores
  } catch (error) {
    console.error(error); // Em caso de erro, registra o erro no console
    res.status(500).json({ mensagem: 'Erro ao listar livros.' }); // Retorna um código 500 e uma mensagem de erro
  }
});

module.exports = router; // Exporta o roteador com a rota para listar os livros

const express = require('express');
const dbMiddleware = require('../conexao/conexao'); // Importa o middleware de conexão com o banco de dados

const router = express.Router(); // Cria um roteador para gerenciar as rotas

router.get('/autor/:id', async (req, res) => {
  const { id } = req.params; // Obtém o parâmetro 'id' da URL, que identifica o autor que queremos buscar

  try {
    const result = await req.db.query(
      'SELECT autores.id, autores.nome, autores.idade, livros.id as livro_id, livros.nome as livro_nome, livros.genero, livros.editora, livros.data_publicacao FROM autores LEFT JOIN livros ON autores.id = livros.autor_id WHERE autores.id = $1',
      [id] // Faz uma consulta no banco de dados para buscar informações do autor e dos livros usando o 'id' fornecido
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ mensagem: 'Autor não encontrado' }); // Se o autor não for encontrado, retorna um código 404 e uma mensagem de erro
    }

    const autor = {
      id: result.rows[0].id,
      nome: result.rows[0].nome,
      idade: result.rows[0].idade,
      livros: [], // Inicializa um objeto para armazenar as informações do autor e seus livros
    };

    result.rows.forEach((row) => {
      if (row.livro_id) {
        autor.livros.push({
          id: row.livro_id,
          nome: row.livro_nome,
          genero: row.genero,
          editora: row.editora,
          data_publicacao: row.data_publicacao,
        }); // Organiza as informações do autor e seus livros em um formato legível
      }
    });

    res.json(autor); // Retorna as informações do autor em formato JSON se tudo der certo

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar autor.' }); // Em caso de erro, retorna um código 500 e uma mensagem de erro
  }
});

module.exports = router;
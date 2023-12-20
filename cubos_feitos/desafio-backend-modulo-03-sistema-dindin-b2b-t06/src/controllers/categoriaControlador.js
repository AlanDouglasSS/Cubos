const express = require('express');
const conexao = require('../conexao/conexao');

const router = express.Router();

// Rota para cadastrar categoria
router.post('/categorias', async (req, res) => {
  try {
    // Obter os dados da categoria do corpo da requisição
    const { nome } = req.body;

    // Validar os dados da categoria
    if (!nome) {
      return res.status(400).json({ mensagem: 'Por favor, preencha todos os campos.' });
    }

    // Verificar se a categoria já existe no banco de dados
    const query = 'SELECT * FROM categorias WHERE nome = $1';
    const values = [nome];
    const resultado = await conexao.query(query, values);

    if (resultado.rows.length > 0) {
      return res.status(400).json({ mensagem: 'Categoria já cadastrada.' });
    }

    // Inserir a nova categoria no banco de dados
    const insertQuery = 'INSERT INTO categorias (nome) VALUES ($1)';
    await conexao.query(insertQuery, values);

    res.status(201).json({ mensagem: 'Categoria cadastrada com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao cadastrar categoria.' });
  }
});

// Rota para listar categorias
router.get('/categorias', async (req, res) => {
  try {
    // Buscar todas as categorias no banco de dados
    const query = 'SELECT * FROM categorias';
    const resultado = await conexao.query(query);

    // Retorno das Categorias como resposta
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensagem: 'Erro ao listar categorias',
    });
  }
});

// Exportar o router
module.exports = router;
const express = require('express');
const conexao = require('../conexao/conexao');
const Transacao = require('../models/transacao');

const router = express.Router();

// Rota para listar todas as transações
router.get('/transacoes', async (req, res) => {
  try {
    // Buscar todas as transações no banco de dados
    const transacoes = await Transacao.find();

    // Retornar as transações como resposta
    res.json(transacoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao listar transações.' });
  }
});

// Rota para detalhar uma transação
router.get('/transacoes/:id', async (req, res) => {
  try {
    // Obter o ID da transação a ser detalhada
    const { id } = req.params;

    // Buscar a transação no banco de dados pelo ID
    const transacao = await Transacao.findById(id);

    // Verificar se a transação existe
    if (!transacao) {
      return res.status(404).json({ mensagem: 'Transação não encontrada.' });
    }

    // Retornar a transação como resposta
    res.json(transacao);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao detalhar transação.' });
  }
});

// Rota para cadastrar uma nova transação
router.post('/transacoes', async (req, res) => {
  try {
    // Obter os dados da transação do corpo da requisição
    const { descricao, valor, categoria } = req.body;

    // Validar os dados da transação
    if (!descricao || !valor || !categoria) {
      return res.status(400).json({ mensagem: 'Por favor, preencha todos os campos.' });
    }

    // Criar uma nova transação
    const novaTransacao = new Transacao({
      descricao,
      valor,
      categoria
    });

    // Salvar a transação no banco de dados
    await novaTransacao.save();

    res.status(201).json({ mensagem: 'Transação cadastrada com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao cadastrar transação.' });
  }
});

// Rota para editar uma transação
router.put('/transacoes/:id', async (req, res) => {
  try {
    // Obter o ID da transação a ser editada
    const { id } = req.params;

    // Obter os novos dados da transação do corpo da requisição
    const { descricao, valor, categoria } = req.body;

    // Validar os dados da transação
    if (!descricao || !valor || !categoria) {
      return res.status(400).json({ mensagem: 'Por favor, preencha todos os campos.' });
    }

    // Buscar a transação no banco de dados pelo ID
    const transacao = await Transacao.findById(id);

    // Verificar se a transação existe
    if (!transacao) {
      return res.status(404).json({ mensagem: 'Transação não encontrada.' });
    }

    // Atualizar os dados da transação
    transacao.descricao = descricao;
    transacao.valor = valor;
    transacao.categoria = categoria;

    // Salvar a transação atualizada no banco de dados
    await transacao.save();

    res.json({ mensagem: 'Transação atualizada com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao editar transação.' });
  }
});

// Rota para remover uma transação
router.delete('/transacoes/:id', async (req, res) => {
  try {
    // Obter o ID da transação a ser removida
    const { id } = req.params;

    // Buscar a transação no banco de dados pelo ID
    const transacao = await Transacao.findById(id);

    // Verificar se a transação existe
    if (!transacao) {
      return res.status(404).json({ mensagem: 'Transação não encontrada.' });
    }

    // Remover a transação do banco de dados
    await transacao.remove();

    res.json({ mensagem: 'Transação removida com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao remover transação.' });
  }
});

// Exportar o router
module.exports = router;
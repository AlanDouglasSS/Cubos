const db = require('../conexao/conexao');

const Transacao = {};

// Função para listar todas as transações
Transacao.listarTransacoes = async () => {
  try {
    const transacoes = await db.any('SELECT * FROM transacoes');
    return transacoes;
  } catch (error) {
    throw error;
  }
};

// Função para detalhar uma transação
Transacao.detalharTransacao = async (id) => {
  try {
    const transacao = await db.one('SELECT * FROM transacoes WHERE id = $1', [id]);
    return transacao;
  } catch (error) {
    throw error;
  }
};

// Função para cadastrar uma nova transação
Transacao.cadastrarTransacao = async (descricao, valor, categoria) => {
  try {
    const novaTransacao = await db.one(
      'INSERT INTO transacoes (descricao, valor, categoria) VALUES ($1, $2, $3) RETURNING *',
      [descricao, valor, categoria]
    );
    return novaTransacao;
  } catch (error) {
    throw error;
  }
};

// Função para editar uma transação
Transacao.editarTransacao = async (id, descricao, valor, categoria) => {
  try {
    const transacaoEditada = await db.one(
      'UPDATE transacoes SET descricao = $2, valor = $3, categoria = $4 WHERE id = $1 RETURNING *',
      [id, descricao, valor, categoria]
    );
    return transacaoEditada;
  } catch (error) {
    throw error;
  }
};

// Função para remover uma transação
Transacao.removerTransacao = async (id) => {
  try {
    const transacaoRemovida = await db.one('DELETE FROM transacoes WHERE id = $1 RETURNING *', [id]);
    return transacaoRemovida;
  } catch (error) {
    throw error;
  }
};

module.exports = Transacao;
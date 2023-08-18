const livros = require('../dados/livros');

/**
 * Consulta a coleção inteira de livros da biblioteca.
 *
 * @param {Object} req - O objeto de requisição do Express.
 * @param {Object} res - O objeto de resposta do Express.
 */
function consultarColecao(req, res) {
  res.json(livros);
}

/**
 * Consulta um livro específico da biblioteca por ID.
 *
 * @param {Object} req - O objeto de requisição do Express.
 * @param {Object} res - O objeto de resposta do Express.
 */

function consultarLivroPorId(req, res) {
  const id = parseInt(req.params.id);

  const livro = livros.find((livro) => livro.id === id);

  if (!livro) {
    return res.status(404).json({ mensagem: "Ops, não achei esse livro! 📚💔" });
  }

  res.json(livro);
}

function adicionarLivro(req, res) {
  const novoLivro = req.body;

  // Encontra o próximo ID disponível
  const novoId = livros.length > 0 ? livros[livros.length - 1].id + 1 : 1;

  // Atribui o novo ID ao novo livro
  novoLivro.id = novoId;

  livros.push(novoLivro);
  res.status(201).json({ mensagem: "Livro adicionado.", livro: novoLivro });
}

function substituirLivro(req, res) {
  const id = parseInt(req.params.id);
  const novoLivro = req.body;

  const index = livros.findIndex((livro) => livro.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "Não existe livro a ser substituído para o ID informado." });
  }

  livros[index] = { ...novoLivro, id };
  res.json({ mensagem: "Livro substituído." });
}

function alterarLivro(req, res) {
  const id = parseInt(req.params.id);
  const alteracoes = req.body;

  const index = livros.findIndex((livro) => livro.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "Não existe livro a ser alterado para o ID informado." });
  }

  livros[index] = { ...livros[index], ...alteracoes };
  res.json({ mensagem: "Livro alterado." });
}

function removerLivro(req, res) {
  const id = parseInt(req.params.id);

  const index = livros.findIndex((livro) => livro.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "Não existe livro a ser removido para o ID informado." });
  }

  livros.splice(index, 1);
  res.json({ mensagem: "Livro removido." });
}

module.exports = {
  consultarColecao,
  consultarLivroPorId,
  adicionarLivro,
  substituirLivro,
  alterarLivro,
  removerLivro,
};
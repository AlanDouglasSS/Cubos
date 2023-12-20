const conexao = require('../conexao/conexao');

// Função para cadastrar um novo usuário
const cadastrarUsuario = async (req, res) => {
  try {
    // Obter os dados do usuário do corpo da requisição
    const { nome, email, senha } = req.body;

    // Validar os dados do usuário
    if (!nome || !email || !senha) {
      return res.status(400).json({ mensagem: 'Por favor, preencha todos os campos.' });
    }

    // Verificar se o usuário já existe no banco de dados
    const query = 'SELECT * FROM usuarios WHERE email = $1';
    const values = [email];
    const resultado = await conexao.query(query, values);

    if (resultado.rows.length > 0) {
      return res.status(400).json({ mensagem: 'Usuário já cadastrado.' });
    }

    // Inserir o novo usuário no banco de dados
    const inserirUsuarioQuery = 'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)';
    const inserirUsuarioValues = [nome, email, senha];

    await conexao.query(inserirUsuarioQuery, inserirUsuarioValues);

    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao cadastrar usuário.' });
  }
};

// Função para listar todos os usuários
const listarUsuarios = async (req, res) => {
  try {
    // Buscar todos os usuários no banco de dados
    const query = 'SELECT * FROM usuarios';
    const resultado = await conexao.query(query);

    // Retornar os usuários como resposta
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao listar usuários.' });
  }
};

// Exportar as funções do controlador
module.exports = {
  cadastrarUsuario,
  listarUsuarios
};
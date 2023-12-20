const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Rota para cadastrar usuário
router.post('/usuarios', async (req, res) => {
  try {
    // Obter os dados do usuário do corpo da requisição
    const { nome, email, senha } = req.body;

    // Validar os dados do usuário
    if (!nome || !email || !senha) {
      return res.status(400).json({ mensagem: 'Por favor, preencha todos os campos.' });
    }

    // Verificar se o usuário já existe no banco de dados
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ mensagem: 'Usuário já cadastrado.' });
    }

    // Gerar um hash da senha
    const senhaHash = await bcrypt.hash(senha, 10);

    // Criar um novo usuário
    const novoUsuario = new Usuario({
      nome,
      email,
      senha: senhaHash
    });

    // Salvar o usuário no banco de dados
    await novoUsuario.save();

    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao cadastrar usuário.' });
  }
});

// Rota para fazer login
router.post('/login', async (req, res) => {
  try {
    // Obter as credenciais do usuário do corpo da requisição
    const { email, senha } = req.body;

    // Validar as credenciais do usuário
    if (!email || !senha) {
      return res.status(400).json({ mensagem: 'Por favor, preencha todos os campos.' });
    }

    // Verificar se o usuário existe no banco de dados
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ mensagem: 'Usuário não encontrado.' });
    }

    // Verificar se a senha está correta
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaCorreta) {
      return res.status(400).json({ mensagem: 'Senha incorreta.' });
    }

    // Gerar um token de autenticação
    const token = jwt.sign(
      { usuarioId: usuario._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ mensagem: 'Login bem-sucedido!', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao fazer login.' });
  }
});

module.exports = router;
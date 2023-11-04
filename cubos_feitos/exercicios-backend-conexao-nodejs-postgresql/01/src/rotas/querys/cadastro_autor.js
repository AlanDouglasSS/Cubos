const express = require('express');
const router = express.Router(); // Cria um roteador para gerenciar as rotas

const cadastrarAutor = async (req, res) => {
    const { nome, idade } = req.body; // Obtém os dados do autor do corpo da requisição

    try {
        const query = 'INSERT INTO autores (nome, idade) VALUES ($1, $2) RETURNING id'; // Define a consulta SQL para inserir um autor no banco
        const values = [nome, idade]; // Parâmetros da consulta
        const result = await req.db.query(query, values); // Executa a consulta e retorna o ID do autor inserido
        console.log('Autor cadastrado com sucesso:', result.rows[0]);
        return { id: result.rows[0].id, nome, idade }; // Retorna as informações do autor cadastrado
    } catch (error) {
        console.error('Erro ao cadastrar o autor:', error); // Em caso de erro, registra o erro no console
        return { mensagem: 'Erro ao cadastrar o autor.' }; // Retorna uma mensagem de erro
    }
};

// Rota para cadastrar um autor
router.post('/autor', async (req, res) => {
    const { nome, idade } = req.body; // Obtém os dados do autor do corpo da requisição

    if (!nome) {
        return res.status(400).json({ mensagem: 'O campo nome é obrigatório.' });
    } // Verifica se o campo 'nome' do autor foi fornecido na requisição e, se não, retorna um erro 400

    const autor = await cadastrarAutor(req, res); // Chama a função para cadastrar um autor e aguarda o resultado

    if (autor.id) {
        res.status(201).json(autor); // Se o autor for cadastrado com sucesso, retorna as informações do autor com um código 201 (Created)
    } else {
        res.status(500).json(autor); // Em caso de erro, retorna um código 500 e uma mensagem de erro
    }
});

module.exports = router; // Exporta o roteador com as rotas relacionadas ao cadastro de autores

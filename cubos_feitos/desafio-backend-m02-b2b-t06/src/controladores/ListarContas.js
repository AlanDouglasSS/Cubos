const bancodedados = require('../bancodedados');

function listarContas(req, res) {
    const { senha_banco } = req.query;

    try {
        if (senha_banco !== bancodedados.banco.senha) {
            throw new Error('A senha do banco informada é inválida!');
        }

        res.json(bancodedados.contas);
    } catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
}

module.exports = listarContas;
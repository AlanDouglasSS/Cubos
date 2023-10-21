const bancodedados = require('../bancodedados');

function atualizarUsuario(req, res) {
    const numeroConta = req.params.numeroConta;
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    try {
        const conta = bancodedados.contas.find(conta => conta.numero === numeroConta);
        if (!conta) {
            throw new Error('Conta bancária não encontrada!');
        }

        const cpfExistente = bancodedados.contas.find(conta => conta.usuario.cpf === cpf && conta.numero !== numeroConta);
        if (cpfExistente) {
            throw new Error('O CPF informado já existe cadastrado!');
        }

        const emailExistente = bancodedados.contas.find(conta => conta.usuario.email === email && conta.numero !== numeroConta);
        if (emailExistente) {
            throw new Error('O e-mail informado já existe cadastrado!');
        }

        // Atualizar dados do usuário
        conta.usuario.nome = nome;
        conta.usuario.cpf = cpf;
        conta.usuario.data_nascimento = data_nascimento;
        conta.usuario.telefone = telefone;
        conta.usuario.email = email;
        conta.usuario.senha = senha;

        res.status(204).end();
    } catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
}

module.exports = atualizarUsuario;
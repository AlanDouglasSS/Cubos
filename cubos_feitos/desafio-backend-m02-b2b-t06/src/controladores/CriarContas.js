const bancodedados = require('../bancodedados');

function criarConta(req, res) {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    try {
        // Validar campos obrigatórios
        if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
            throw new Error('Todos os campos são obrigatórios!');
        }

        // Verificar se já existe conta com o mesmo CPF ou e-mail
        const contaExistente = bancodedados.contas.find(conta => conta.usuario.cpf === cpf || conta.usuario.email === email);
        if (contaExistente) {
            throw new Error('Já existe uma conta com o CPF ou e-mail informado!');
        }

        // Criar e adicionar nova conta
        const novaConta = {
            numero: String(bancodedados.contas.length + 1),
            saldo: 0,
            usuario: {
                nome,
                cpf,
                data_nascimento,
                telefone,
                email,
                senha
            }
        };
        bancodedados.contas.push(novaConta);

        res.status(201).end();
    } catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
}

module.exports = criarConta;
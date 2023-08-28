const bancodedados = require('../bancodedados');

function sacar(req, res) {
    const { numero_conta, valor, senha } = req.body;

    try {
        if (!numero_conta || !valor || !senha) {
            throw new Error('O número da conta, valor e senha são obrigatórios!');
        }

        const conta = bancodedados.contas.find(conta => conta.numero === numero_conta);
        if (!conta) {
            throw new Error('Conta bancária não encontrada!');
        }

        if (valor <= 0) {
            throw new Error('O valor do saque deve ser maior que zero!');
        }

        if (conta.senha !== senha) {
            throw new Error('A senha informada está incorreta!');
        }

        if (conta.saldo < valor) {
            throw new Error('Saldo insuficiente!');
        }

        conta.saldo -= valor;

        // Registrar a transação de saque
        const transacao = {
            data: new Date().toISOString(),
            numero_conta: numero_conta,
            valor: valor
        };
        bancodedados.saques.push(transacao);

        res.status(204).end();
    } catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
}

module.exports = sacar;
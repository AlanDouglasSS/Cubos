const bancodedados = require('../bancodedados');

function depositar(req, res) {
    const { numero_conta, valor } = req.body;

    try {
        if (!numero_conta || !valor) {
            throw new Error('O número da conta e o valor são obrigatórios!');
        }

        const conta = bancodedados.contas.find(conta => conta.numero === numero_conta);
        if (!conta) {
            throw new Error('Conta bancária não encontrada!');
        }

        if (valor <= 0) {
            throw new Error('O valor do depósito deve ser maior que zero!');
        }

        conta.saldo += valor;

        // Registrar a transação de depósito
        const transacao = {
            data: new Date().toISOString(),
            numero_conta: numero_conta,
            valor: valor
        };
        bancodedados.depositos.push(transacao);

        res.status(204).end();
    } catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
}

module.exports = depositar;
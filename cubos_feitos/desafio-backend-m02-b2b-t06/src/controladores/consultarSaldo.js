const bancodedados = require('../bancodedados');

function consultarSaldo(req, res) {
    const { numero_conta, senha } = req.query;

    try {
        if (!numero_conta || !senha) {
            throw new Error('O número da conta e a senha são obrigatórios!');
        }

        const conta = bancodedados.contas.find(conta => conta.numero === numero_conta);
        if (!conta) {
            throw new Error('Conta bancária não encontrada!');
        }

        if (conta.senha !== senha) {
            throw new Error('A senha informada está incorreta!');
        }

        res.status(200).json({ saldo: conta.saldo });
    } catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
}

module.exports = consultarSaldo;

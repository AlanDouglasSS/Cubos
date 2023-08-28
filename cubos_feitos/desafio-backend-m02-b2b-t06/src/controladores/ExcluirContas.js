const bancodedados = require('../bancodedados');

function excluirConta(req, res) {
    const numeroConta = req.params.numeroConta;

    try {
        const conta = bancodedados.contas.find(conta => conta.numero === numeroConta);
        if (!conta) {
            throw new Error('Conta bancária não encontrada!');
        }

        if (conta.saldo !== 0) {
            throw new Error('A conta só pode ser removida se o saldo for zero!');
        }

        const index = bancodedados.contas.indexOf(conta);
        bancodedados.contas.splice(index, 1);

        res.status(204).end();
    } catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
}

module.exports = excluirConta;
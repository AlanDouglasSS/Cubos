const bancodedados = require('../bancodedados');

function emitirExtrato(req, res) {
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

        const extrato = {
            depositos: bancodedados.depositos.filter(dep => dep.numero_conta === numero_conta),
            saques: bancodedados.saques.filter(saq => saq.numero_conta === numero_conta),
            transferenciasEnviadas: bancodedados.transferencias.filter(trans => trans.numero_conta_origem === numero_conta),
            transferenciasRecebidas: bancodedados.transferencias.filter(trans => trans.numero_conta_destino === numero_conta)
        };

        res.status(200).json(extrato);
    } catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
}

module.exports = emitirExtrato;

const bancodedados = require('../bancodedados');

function transferir(req, res) {
    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

    try {
        if (!numero_conta_origem || !numero_conta_destino || !valor || !senha) {
            throw new Error('Os números das contas, valor e senha são obrigatórios!');
        }

        const contaOrigem = bancodedados.contas.find(conta => conta.numero === numero_conta_origem);
        const contaDestino = bancodedados.contas.find(conta => conta.numero === numero_conta_destino);
        
        if (!contaOrigem || !contaDestino) {
            throw new Error('Conta bancária de origem ou destino não encontrada!');
        }

        if (valor <= 0) {
            throw new Error('O valor da transferência deve ser maior que zero!');
        }

        if (contaOrigem.senha !== senha) {
            throw new Error('A senha informada está incorreta!');
        }

        if (contaOrigem.saldo < valor) {
            throw new Error('Saldo insuficiente!');
        }

        contaOrigem.saldo -= valor;
        contaDestino.saldo += valor;

        // Registrar a transação de transferência
        const transacao = {
            data: new Date().toISOString(),
            numero_conta_origem: numero_conta_origem,
            numero_conta_destino: numero_conta_destino,
            valor: valor
        };
        bancodedados.transferencias.push(transacao);

        res.status(204).end();
    } catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
}

module.exports = transferir;
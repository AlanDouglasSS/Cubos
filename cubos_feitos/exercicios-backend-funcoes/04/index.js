// Declaração do objeto contaBancaria com os atributos nome, saldo e historicos.
const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    // Método depositar: realiza um depósito na conta bancária.
    depositar: function (valor) {
        // Soma o valor informado ao saldo atual da conta.
        this.saldo += valor;

        // Adiciona um objeto ao array historicos, representando a operação de depósito.
        this.historicos.push({
            tipo: "Depósito",
            valor: valor,
        });

        // Retorna a mensagem de depósito realizado com sucesso.
        return `Deposito de R$${valor / 100} realizado para o cliente: ${this.nome}`;
    },

    // Método sacar: realiza um saque na conta bancária.
    sacar: function (valor) {
        // Verifica se o valor a ser sacado é maior que o saldo atual da conta.
        if (valor > this.saldo) {
            // Retorna uma mensagem de saldo insuficiente caso a condição seja verdadeira.
            return `Saldo insuficiente para o saque de: ${this.nome}`;
        }

        // Caso o saldo seja suficiente, subtrai o valor do saldo atual da conta.
        this.saldo -= valor;

        // Adiciona um objeto ao array historicos, representando a operação de saque.
        this.historicos.push({
            tipo: "Saque",
            valor: valor,
        });

        // Retorna a mensagem de saque realizado com sucesso.
        return `Saque de R$${valor / 100} realizado para o cliente: ${this.nome}`;
    },

    // Método extrato: emite o extrato da conta bancária.
    extrato: function () {
        // Inicializa a string com o histórico das operações.
        let historicoString = "Histórico:";

        // Percorre o array historicos e adiciona cada operação à string historicoString.
        for (const operacao of this.historicos) {
            historicoString += `\n${operacao.tipo} de R$${operacao.valor / 100}`;
        }

        // Retorna a mensagem com o extrato completo da conta.
        return `Extrato de ${this.nome} - Saldo: R$${this.saldo / 100}\n${historicoString}`;
    },
};

// Teste das operações
console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());
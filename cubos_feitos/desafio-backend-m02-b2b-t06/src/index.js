const express = require('express');
const app = express();
const PORT = 3000;

const listarContas = require('./controladores/ListarContas');
const criarConta = require('./controladores/CriarContas');
const atualizarUsuario = require('./controladores/AtualizarUsuarios');
const excluirConta = require('./controladores/ExcluirContas');
const depositar = require('./controladores/depositar');
const sacar = require('./controladores/sacar');
const transferir = require('./controladores/transferir');
const consultarSaldo = require('./controladores/consultarSaldo');
const emitirExtrato = require('./controladores/EmitirSaldo');

app.use(express.json());

app.get('/contas', listarContas);
app.post('/contas', criarConta);
app.put('/contas/:numeroConta/usuario', atualizarUsuario);
app.delete('/contas/:numeroConta', excluirConta);
app.post('/transacoes/depositar', depositar);
app.post('/transacoes/sacar', sacar);
app.post('/transacoes/transferir', transferir);
app.get('/contas/saldo', consultarSaldo);
app.get('/contas/extrato', emitirExtrato);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

/*
Listar Contas:
    Método: GET
    URL: http://localhost:3000/contas?senha_banco=Cubos123Bank
    
Criar Conta:
    Método: POST
    URL: http://localhost:3000/contas

    EXEMPLO:
    {
        "nome": "Nome do Cliente",
        "cpf": "12345678901",
        "data_nascimento": "2000-01-01",
        "telefone": "999999999",
        "email": "cliente@example.com",
        "senha": "senha123"
    }


Atualizar Usuário da Conta:
    Método: PUT
    URL: http://localhost:3000/contas/numeroConta/usuario

    EXEMPLO:
    {
        "nome": "Novo Nome",
        "cpf": "12345678902",
        "data_nascimento": "2001-02-02",
        "telefone": "888888888",
        "email": "novo@example.com",
        "senha": "novasenha123"
    }

    
Excluir Conta:
    Método: DELETE
    URL: http://localhost:3000/contas/numeroConta
    
Depositar:
    Método: POST
    URL: http://localhost:3000/transacoes/depositar

    EXEMPLO:
    {
        "numero_conta": "numeroConta",
        "valor": 5000
    }

    
Sacar:
    Método: POST
    URL: http://localhost:3000/transacoes/sacar

    EXEMPLO:
    {
        "numero_conta": "numeroConta",
        "valor": 1000,
        "senha": "senha123"
    }

    
Transferir:
    Método: POST
    URL: http://localhost:3000/transacoes/transferir

    EXEMPLO:
    {
        "numero_conta_origem": "numeroContaOrigem",
        "numero_conta_destino": "numeroContaDestino",
        "valor": 2000,
        "senha": "senha123"
    }

    
Consultar Saldo:
    Método: GET
    URL: http://localhost:3000/contas/saldo?numero_conta=numeroConta&senha=senha123

Emitir Extrato:
    Método: GET
    URL: http://localhost:3000/contas/extrato?numero_conta=numeroConta&senha=senha123
*/
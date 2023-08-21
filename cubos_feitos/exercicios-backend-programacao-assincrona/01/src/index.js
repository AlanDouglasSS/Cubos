const express = require('express');
const {getStateFromZipcode} = require('utils-playground');

const app = express();

//=====LISTANDO PRODUTOS

const produtos = require('./bancodedados/produtos');

app.get("/produtos", (req, res) => {

    res.json(produtos);

});

//=====ASSOCIANDO PRODUTO E ID

app.get("/produtos/:idProduto", (req, res) => {

    const id = parseInt(req.params.idProduto);

    const produto = produtos.find(item => item.id === id);

    if(produto){
        res.json(produto);
    }else{
        res.status(404).json({message:'Nenhum produto encontrado!'});
    }

});

//======CALCULANDO CEP COM ID

app.get("/produtos/:idProduto/frete/:cep", async(req, res) => {

    const idProduto = parseInt(req.params.idProduto);
    const cep = req.params.cep;

    const produto = produtos.find(item => item.id === idProduto);

    if(!produto){
        res.status(404).json({message: 'Nenhum produto encontrado!'});
        return;
    }

    try{
        const estado = await getStateFromZipcode(cep);

        let PercentualFrete = 0.12;

        if(['AL', 'BA', 'SE', 'PB', 'PE'].includes(estado)){
            PercentualFrete = 0.10;
        }else if('SP', 'RJ'){
            PercentualFrete = 0.15;
        }

        const valorFrete = produto.valor * PercentualFrete;

        res.json({
            produto:{
                id: produto.valor,
                nome: produto.nome,
                valor: produto.valor
            },
            estado: estado,
            frete: valorFrete
        });

        

    }catch(error){
        res.json(500).json({message: 'Erro ao calcular o frete'});
    }

});

app.listen(3000, () => {
    console.log('Conexão na porta 3000 estabelecida!');
});
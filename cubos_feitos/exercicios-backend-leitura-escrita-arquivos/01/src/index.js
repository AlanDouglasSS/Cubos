// O começo da jornada - Preparando as ferramentas mágicas
const express = require('express'); // Pergaminho de Express carregado!
const { getStateFromZipcode } = require('utils-playground'); // Livro de feitiços para encontrar estados por CEP!

const app = express(); // A poção mágica para criar um servidor é invocada!

//=====LISTANDO PRODUTOS - Mostrando o tesouro mágico disponível

const produtos = require('./bancodedados/produtos'); // A lista de tesouros é revelada!

app.get("/produtos", (req, res) => {
    res.json(produtos); // Os tesouros são exibidos com um toque de magia!
});

//=====ASSOCIANDO PRODUTO E ID - Buscando informações sobre um tesouro específico

app.get("/produtos/:idProduto", (req, res) => {
    const id = parseInt(req.params.idProduto);

    try {
        const produto = produtos.find(item => item.id === id);

        if (produto) {
            res.json(produto); // Os segredos do tesouro são revelados!
        } else {
            res.status(404).json({ message: 'Oops, não encontramos esse tesouro!' }); // Feitiço de procura falhou!
        }
    } catch (error) {
        res.status(500).json({ message: 'Ocorreu um feitiço proibido! Não podemos mostrar o tesouro.' }); // Magia negra à vista!
    }
});

//======CALCULANDO CEP COM ID - Definindo o valor do frete mágico

app.get("/produto/:idProduto/frete/:cep", async (req, res) => {
    const idProduto = parseInt(req.params.idProduto);
    const cep = req.params.cep;

    try {
        const produto = produtos.find(item => item.id === idProduto);

        if (!produto) {
            res.status(404).json({ message: 'Tesouro não encontrado!' }); // Sem tesouro? Não há magia para isso!
            return;
        }

        const estado = await getStateFromZipcode(cep); // O feitiço encontra o estado pelo CEP!

        let fretePercentual = 0.12; // Magia de frete padrão

        if (["BA", "SE", "AL", "PE", "PB"].includes(estado)) {
            fretePercentual = 0.10; // Encantamento especial para alguns estados!
        } else if (["SP", "RJ"].includes(estado)) {
            fretePercentual = 0.15; // Magia extra para outros estados!
        }

        const freteValor = produto.valor * fretePercentual; // O valor do frete é revelado pela magia!

        res.json({
            produto: {
                id: produto.id,
                nome: produto.nome,
                valor: produto.valor
            },
            estado: estado,
            frete: freteValor
        });
    } catch (error) {
        res.status(500).json({ message: 'A magia de calcular o frete falhou. Desculpe, viajante.' }); // O feitiço deu errado!
    }
});

// 🎉 Preparado para o show de magia na porta 3000!

app.listen(3000, () => {
    console.log('O portal mágico está aberto na porta 3000! 🪄✨'); // A magia está pronta para começar!
});
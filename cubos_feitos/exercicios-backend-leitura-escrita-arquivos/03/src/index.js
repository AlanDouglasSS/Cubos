const express = require('express'); // Invocando a varinha mágica do Express 🪄
const fs = require('fs').promises; // Buscando feitiços para lidar com arquivos 📚
const { buscarEndereco } = require('utils-playground'); // Conjurando a magia para buscar endereços 🌍

const app = express(); // Preparando nossa poção de servidor! 🧙‍♂️
const PORT = 3000; // Abrindo o portal mágico para a API! 🔮

// Usaremos um feitiço para interpretar o corpo da requisição como JSON 🧪
app.use(express.json());

// Feitiço para ler os endereços de nosso pergaminho digital 📜
async function lerEnderecos() {
    try {
        const data = await fs.readFile('enderecos.json', 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return []; // Caso o pergaminho esteja vazio ou danificado 📜❌
    }
}

// Feitiço para escrever novos endereços no pergaminho 🖋️
async function escreverEnderecos(enderecos) {
    try {
        await fs.writeFile('enderecos.json', JSON.stringify(enderecos, null, 2));
    } catch (error) {
        console.error('Erro ao escrever endereços:', error); // Cuidado com os tropeços nos feitiços! ⚡️
    }
}

// Rota para consultar o endereço pelo CEP
app.get('/enderecos/:cep', async (req, res) => {
    const cep = req.params.cep.replace(/\D/g, ''); // Preparando o CEP para o feitiço 📜✨

    try {
        let enderecos = await lerEnderecos(); // Invocando o feitiço de leitura do pergaminho 📜🔮

        const enderecoEncontrado = enderecos.find(endereco => endereco.cep === cep);

        if (enderecoEncontrado) {
            res.json(enderecoEncontrado); // Entregando o endereço encontrado 🏠✉️
        } else {
            const novoEndereco = await buscarEndereco(cep); // Convocando o feitiço para buscar endereço 🧹🧙
            enderecos.push(novoEndereco);
            await escreverEnderecos(enderecos); // Usando a poção mágica para atualizar o pergaminho 🧪📜
            res.json(novoEndereco); // Entregando o endereço recém-encontrado! 🏠🌟
        }
    } catch (error) {
        console.error('Erro na consulta de endereço:', error); // Cuidado com os feitiços instáveis! ☠️⚡️
        res.status(500).json({ message: 'Erro ao consultar endereço.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`); // A magia começa a acontecer! ✨🔮
});
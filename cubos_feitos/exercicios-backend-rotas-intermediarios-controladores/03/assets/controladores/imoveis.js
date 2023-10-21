// controladores/imoveis.js
// A equipe de controladores - os magos - ajudam a mostrar os imóveis.

// Invocando os serviços dos duendes (dados dos imóveis).
const imoveis = require('../dados/imoveis');

// Um mago que revela todos os tesouros - quer dizer, imóveis!
function listarImoveis(req, res) {
    // Aqui está o mapa do tesouro - ops, quero dizer, os imóveis!
    res.json(imoveis);
}

// Um mago especialista em encontrar tesouros únicos pelo ID.
function obterImovelPorId(req, res) {
    // Encontrando o número da porta do tesouro - er, ID do imóvel.
    const id = parseInt(req.params.id);

    // O feitiço para encontrar o tesouro (imóvel) pelo mapa (array).
    const imovel = imoveis.find(item => item.id === id);

    // Se o feitiço funcionou, compartilhamos o tesouro, senão... poof!
    if (imovel) {
        res.json(imovel);
    } else {
        // Desculpe, o feitiço de localização falhou, sem tesouro aqui.
        res.status(404).json({ message: 'Imóvel não encontrado' });
    }
}

// Exportando nossos magos para o mundo mágico da web.
module.exports = { listarImoveis, obterImovelPorId };
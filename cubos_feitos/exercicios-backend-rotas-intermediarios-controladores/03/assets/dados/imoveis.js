// dados/imoveis.js
// Aqui guardamos a lista secreta de casinhas mágicas.

// Um array com nossos tesouros - digo, imóveis!
const imoveis = [
    {
        id: 1,
        logradouro: "Av. Getúlio Vargas",
        numero: 1458,
        complemento: "Térreo",
        bairro: "Funcionários",
        cidade: "Belo Horizonte",
        cep: "30112-021",
    },
    {
        id: 2,
        logradouro: "Av. Paulista",
        numero: 1009,
        complemento: "16º andar",
        bairro: "Cerqueira César",
        cidade: "São Paulo",
        cep: "01310-100",
    },
];

// Nossa equipe de duendes entrega os imóveis secretos para quem precisar.
module.exports = imoveis;

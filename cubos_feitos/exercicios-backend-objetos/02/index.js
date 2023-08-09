const carro ={
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 2022,
    cor: "vermelho",
    quantidade_portas: 4,
    automatico: false
}

const auto = carro.automatico === true ? 'automático' : 'manual';

console.log(`O carro de Maria da marca ${carro.marca} é um ${carro.modelo} com câmbio ${auto}`);
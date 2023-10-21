const endereco = {
    rua: 'Avenida Brasil',
    numero: 70,
    complemento: 'lado da esquina',
    bairro: 'Pé de pano',
    cep: '59150-010',
    cidade: 'São Paulo',
    estado: 'SP',
    pais: 'Brasil'
};

const usuario = {
    nome: 'Pedro',
    email: 'pedro_cubos@cubos.com',
    telefone: '+55 0319955-7788',
    data_nascimento: '13/04/1990',
    endereco
};

//console.log(usuario);

console.log(`${usuario.nome} mora na rua ${usuario.endereco.rua} com número ${usuario.endereco.numero}`);
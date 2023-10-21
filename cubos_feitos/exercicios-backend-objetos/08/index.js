const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

for (let usuario of usuarios) {
    let mensagem = `Sou ${usuario.nome} e `;
    if (usuario.pets.length === 0) {
        mensagem += `não tenho pets.`;
    } else if (usuario.pets.length === 1) {
        mensagem += `tenho 1 pet.`;
    } else {
        mensagem += `tenho ${usuario.pets.length} pets.`;
    }
    console.log(mensagem);
}
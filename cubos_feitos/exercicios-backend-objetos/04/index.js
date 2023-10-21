const usuarios = [
    {
        nome: "João",
        idade: 25,        
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

let MaiorIdade = usuarios.map(usuario =>{
    return{
        ...usuario,
        'MaiorIdade': usuario.idade > 18
    }
})

console.log(MaiorIdade)
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

//================JOVENS================


let jovens = []
let adultos = []

for(let usuario of usuarios){    
    if(usuario.idade < 18) {        
        jovens.push(usuario)        
    }else{
        adultos.push(usuario)
    }
}
console.log('Jovens:', '\n', jovens ,'\n', 'Adultos:', adultos);


//========================MAP=========







//===============ADULTOS================


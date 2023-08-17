const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [
        
    ]
}

//LISTA DE AULAS E FOR AQUI!!!

//ARMAZENDO AS PROPRIEDADES ADICIOADAS NO OBJETOS EM "OBJ"
let obj = curso.aulas.push(
    {
        Identificador: 1,
        Nome_Aula: "Introdução a Programação"
    },
    {
        Identificador: 2,
        Nome_Aula: "Variáveis"
    },
    {
        Identificador: 3,
        Nome_Aula: "Condicionais"
    },
    {
        Identificador: 4,
        Nome_Aula: "Arrays"
    }
)

console.log(curso);

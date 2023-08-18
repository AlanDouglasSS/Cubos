const express = require('express');

const app = express();

const professores = [
    {id: 1, nome: "Marcio", Setor: "Back-End"},
    {id: 2, nome: "Carla", Setor: "Dados"},
    {id: 3, nome: "Bruno", Setor: "Front-End"}
]

app.get("/professores", (req, res) => {

    const {Setor} = req.query;
    let caixa = professores;
    if(Setor) {
        caixa = professores.filter((resultado) => {
            return resultado.Setor === Setor;
        })
    };
    res.send(caixa)
});

app.get("/professores/:id", (req, res) => {
    const professoresEncontrados = professores.find((professor) => {
        return professor.id === Number(req.params.id)
    });
    res.send(professoresEncontrados);
});


app.listen(3000, () => {
    console.log("Porta 3000 conectada!");
});

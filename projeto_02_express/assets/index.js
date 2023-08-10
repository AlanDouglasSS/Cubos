const express = require('express');

const app = express();

app.get('/', (requisicao, resposta) =>{
    resposta.send('Oi...estou iniciando um novo projeto com express');
});

app.listen(3000);
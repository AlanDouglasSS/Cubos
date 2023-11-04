const express = require('express');
const {Client} = require('pg');

app = express();

app.use(express.json());

app.get('/', async(req, res) => {    
    
    const pool = new Client ({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '123',
        database: 'biblioteca'
    })
    
    try{
        await client.connect();

        const resultado = await client.query('select * from autores');

        await client.end()

        return res.json(resultado);
    }catch(error){
        console.log(error.message)
    }
})

app.listen(3000, () => {
    console.log("Conexão na porta 3000!");
});
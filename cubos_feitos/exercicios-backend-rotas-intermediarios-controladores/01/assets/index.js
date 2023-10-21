/*
Para somar: ========= somar?num1=10&num2=5
Para subtrair: ============ subtrair?num1=10&num2=5
Para multiplicar: ============== multiplicar?num1=10&num2=5
Para dividir: ============= dividir?num1=10&num2=5
*/

const express = require('express');
const app = express();

// somar
app.get('/somar', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const resultado = num1 + num2;
    res.send(resultado.toString());
});

// subtrair
app.get('/subtrair', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const resultado = num1 - num2;
    res.send(resultado.toString());
});

// multiplicar
app.get('/multiplicar', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const resultado = num1 * num2;
    res.send(resultado.toString());
});

// dividir
app.get('/dividir', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (num2 === 0) {
        res.status(400).send('Divisão por zero não é permitida.');
    } else {
        const resultado = num1 / num2;
        res.send(resultado.toString());
    }
});

app.listen(3000, () => {
    console.log('porta 3000 conecta');
});

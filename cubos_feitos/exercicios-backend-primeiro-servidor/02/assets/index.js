// Importa o "Express", que é como a planta de construção para fazer um servidor.
const express = require('express');
const app = express(); // Cria uma instância do "Express" que será o nosso servidor.

// Aqui vamos armazenar os minutos e segundos do cronômetro como se fossem caixinhas.
let minutos = 0;
let segundos = 0;

// Uma ajudinha para mostrar os números com dois dígitos, como 01, 02, 03...
function formatTime(number) {
    return number < 10 ? `0${number}` : `${number}`;
}

// Vamos dar corda no cronômetro para ele começar a contar, como dar corda num relógio.
function iniciarCronometro() {
    // Vamos fazer o cronômetro contar a cada "tic-tac" (a cada 1000 milissegundos, que é 1 segundo).
    interval = setInterval(() => {
        segundos++; // Adicionamos um segundo.
        if (segundos === 60) { // Se já passou um minuto inteiro, aumentamos um minuto e zeramos os segundos.
            minutos++;
            segundos = 0;
        }
    }, 1000); // Cada "tic-tac" é a cada 1000 milissegundos (1 segundo).
}

// Pausa o cronômetro, como apertar o botão de pausa num relógio.
function pausarCronometro() {
    clearInterval(interval); // Paramos o cronômetro, deixamos de escutar o "tic-tac".
}

// Continua o cronômetro após a pausa, é como se desse um "play" no relógio de novo.
function continuarCronometro() {
    iniciarCronometro(); // Começamos a escutar o "tic-tac" novamente.
}

// Reseta o cronômetro, colocando os minutos e segundos de volta para zero.
function zerarCronometro() {
    minutos = 0;
    segundos = 0;
    pausarCronometro(); // Paramos o "tic-tac" também, para não ficar contando depois de zerar.
}

// A seguir estão as ações do nosso servidor para cada endereço (rota):

// A rota principal, como a porta de entrada da casa. Aqui mostramos o tempo atual do cronômetro.
app.get('/', (req, res) => {
    res.send(`Tempo atual do cronômetro: ${formatTime(minutos)} minutos e ${formatTime(segundos)} segundos`);
});

// A rota para começar o cronômetro, como apertar o botão de "liga" no relógio.
app.get('/iniciar', (req, res) => {
    iniciarCronometro();
    res.send('Cronômetro iniciado! A contagem começou!');
});

// A rota para pausar o cronômetro, é como apertar o botão de "pausa" no relógio.
app.get('/pausar', (req, res) => {
    pausarCronometro();
    res.send('Cronômetro pausado! O tempo está parado!');
});

// A rota para continuar o cronômetro após a pausa, é como apertar o botão de "play" no relógio.
app.get('/continuar', (req, res) => {
    continuarCronometro();
    res.send('Cronômetro continuando! A contagem está de volta!');
});

// A rota para zerar o cronômetro, como apertar o botão de "zerar" no relógio.
app.get('/zerar', (req, res) => {
    zerarCronometro();
    res.send('Cronômetro zerado! O tempo foi resetado para zero!');
});

// O nosso servidor está ligado e ouvindo na porta 8000, como se estivesse esperando visitantes na casa.
app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');
});
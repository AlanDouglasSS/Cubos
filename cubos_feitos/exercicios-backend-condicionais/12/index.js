const diaDaSemana = 3;
const dia = diaDaSemana === 1 ? "Segunda-feira" :
            diaDaSemana === 2 ? "Terça-feira" :
            diaDaSemana === 3 ? "Quarta-feira" :
            diaDaSemana === 4 ? "Quinta-feira" :
            diaDaSemana === 5 ? "Sexta-feira" :
            diaDaSemana === 6 ? "Sábado" :
            diaDaSemana === 7 ? "Domingo" : "Dia inválido";

console.log(dia);
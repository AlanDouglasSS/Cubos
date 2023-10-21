//PARA CALCULAR OS CASOS DECOD-19, DEVESSE DIVIDIR CASOS DE PESSOAS INFECTADAS POR POPULACAO EM RISCO!

//exempo!
pessoas_infectadas = 200000;
populacao_riso = 189000000;
let estimativa = pessoas_infectadas / populacao_riso;
console.log(`Estimativa de tranmissao e: ${estimativa.toFixed(4)}%`);
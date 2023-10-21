//APLICANDO UM PERCENTUAL DE TAXA DE JUROS SIMPLES EM R$550 EM UM CAPITAL DE R$3700 NO INTERVALOR DE 5 MESES!

//j = c * i * t;
//i = ?

const juros = 550
let operation = 3700 * 5;
let base = juros / operation;
let taxa = base * 100;
console.log(`Taxa de juros de: ${taxa.toFixed(2)}%`);
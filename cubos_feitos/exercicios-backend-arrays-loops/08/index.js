const numeros = [3, 24, 1, 8, 11, 57, 82, 7, 15];

let maiorNumero = numeros[0];
let i = 0;
while(i < numeros.length){
    
    if(numeros[i] > maiorNumero){
        maiorNumero = numeros[i];
    }
    i++;
}

console.log(maiorNumero);
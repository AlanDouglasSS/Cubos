const numeros = [54, 22, 14, 87, 10, 284];

posicao = -1;

for(i = 0; i < numeros.length; i++){

    if(numeros[i] === 10){
        posicao = i;
        break;
    }
}

console.log(posicao === -1 ? -1 : `A posição do número 10 é "${posicao}"`);
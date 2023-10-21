const original = [5, 7, 13, 17, 26, 34, 118, 245];

let newArray = []; // ARRAY VAZIO!

for(i = 0; i < original.length; i++){ //PERCORRENDO A LISTA E ARMAZENDANDO!
    let lista = original[i];

    if(lista >= 10 && lista <= 20 || lista > 100){ // CONDIÇÃO PARA RETORNO!

        newArray.push(lista); // ADICIONANDO O RETORNO DENTRO DO ARRAY VAZIO!
        
    }    

}

console.log(newArray);
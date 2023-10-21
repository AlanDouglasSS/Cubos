const array = [7, 9, 14, 22, 35, 5, 3, 18];

let Mnumber = array[0];
let Mdiferenca = 0;

let i = 0;
while(i < array.length){
    const value = array[i]; //ESTOU ARMAZENANDO OS ELEMENTOS PERCORRIDOS

    i++; // INCREMENTANDO

    if(value < Mnumber){  //CONDIÇÃO PARA ATUALIZAR O VALOR ANALISADO
        Mnumber = value;
    }

    let diferenca = value - Mnumber; //PEGANDO A DIFERENÇA

    if(diferenca > Mdiferenca){ //CONDIÇÃO PARA ATUALIZAR A MAIOR DIFERENÇA
        Mdiferenca = diferenca;
    }

}

console.log(Mdiferenca);
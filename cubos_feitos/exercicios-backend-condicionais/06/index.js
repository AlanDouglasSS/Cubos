const alturaEmCm = 198;

//seu código aqui

if(alturaEmCm >- 180){
    console.log("Aprovado");
    if(alturaEmCm >= 180 && alturaEmCm <= 185){
        console.log("Posicao: LIBERO");
    }else if(alturaEmCm >= 186 && alturaEmCm <= 195){
        console.log("Posicao: PONTEIRO");
    }else if(alturaEmCm >= 196 && alturaEmCm <= 205){
        console.log("Posicao: OPOSTO");
    }else{
        console.log("Posicao: CENTRAL");
    }
}else{
    console.log("Reprovado");
}


/*
- Caso o jogador tenha menos de 180cm, o programa deve imprimir **REPROVADO**
- Caso tenha entre 180cm e 185cm, o programa deve imprimir **LÍBERO**
- Caso tenha entre 186cm e 195cm, o programa deve imprimir **PONTEIRO**
- Caso tenha entre 196cm e 205cm, o programa deve imprimir **OPOSTO**
- Caso tenha mais de 205cm, o programa deve imprimir **CENTRAL**
*/
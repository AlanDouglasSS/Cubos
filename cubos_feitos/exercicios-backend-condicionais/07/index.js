const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 29000; //emCentavos

//seu código aqui

if(totalDeRendimentos > 28559.70){

    if(portadoraDeDoenca == false){
        if(aposentada == true){
            console.log("ISENTO");
        }else{
            console.log("PEGA LEAO");
        }
    }   

}else if(totalDeRendimentos <= 28559.70){

    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");

}


/*
if(aposentada == false){
    console.log("PEGA LEAO");
}else if(portadoraDeDoenca == false){
    console.log("PEGA LEAO");
}else if(totalDeRendimentos > 28.559,70){
    console.log("PEGA");
}else{
    console.log("ISENTO")
}*/
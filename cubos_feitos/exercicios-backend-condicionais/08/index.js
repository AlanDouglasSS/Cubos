const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;


if(idade >= 12 && idade <= 64){

    //SENTENÇA TERNÁRIA EM CASCATA!
    let patologia = (possuiPatologia == true) ?  "ACESSO NEGADO" : ( 
        (altura >= 150) ? "ACESSO PERMITIDO" : "ACESSO NEGADO"
    )

    //SEGUNDO CASO EM SENTENÇA TERNÁRIA!
    let estudante = (ehEstudante == false) ? "R$20,00" : "R$10,00";

    console.log(patologia);
    console.log(estudante);
}else{
    console.log("ACESSO NEGADO");
}






/*
- Menores de 12 anos
- Maiores de 65 anos
- Que possuam qualquer patologia cardíaca
- Menores de 150cm de altura

Para as pessoas que podem brincar na montanha russa, a tabela de preços é a seguinte:

- 10 reais caso a pessoa seja estudante ou menor de 18 anos (meia entrada)
- 20 reias, caso contrário
*/
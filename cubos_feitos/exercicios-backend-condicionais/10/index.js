const caractere = "5";
if (caractere === caractere.toUpperCase()){
    console.log("Maiúsculo")
}else{
    console.log("Minuscula");
}

const vogais = ['A', 'E', 'I', 'O', 'U'];

if (vogais.includes(caractere.toUpperCase())) {
    console.log(`"${caractere}" é uma vogal.`);
} else if (vogais.includes(caractere.toUpperCase()) === false && /^[a-zA-Z]+$/.test(caractere)) {
    console.log(`"${caractere}" é uma consoante.`);
} else if (!isNaN(parseFloat(caractere)) && isFinite(caractere)) {
    console.log(`"${caractere}" é um número.`);
} else {
    console.log(`"${caractere}" não é uma letra ou um número.`);
}


/*
| Categoria | Caractere                             |
| --------- | ------------------------------------- |
| Vogal     | A E I O U a e i o u                   |
| Consoante | Qualquer letra que não seja uma vogal |
| Número    | 1 2 3 4 5 6 7 9 0                     |
*/

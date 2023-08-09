let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

// Formatar o identificador para conter seis dígitos com zeros à esquerda
identificador = identificador.padStart(6, "0");
console.log(identificador); // 000123

// Formatar o nome para começar com letra maiúscula e manter o restante em letras minúsculas
nome = nome.toLowerCase().replace(/\b\w/g, firstLetter => firstLetter.toUpperCase());
console.log(nome); // José Silva Costa

// Remover espaços em branco do início e do fim do e-mail
email = email.trim();
console.log(email); // jose@email.com

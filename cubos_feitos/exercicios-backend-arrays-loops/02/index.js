const letras = ["A", "a", "B", "C", "E", "e", "e"];

let contar = 0;

for(let i = 0; i < 10; i++){
    if(letras[i] === 'E' || letras[i] === 'e'){
        contar++;
    }
}

if(contar == 0){
    console.log("Nenhuma letra \"E\" ou \"e\" foi encontrada");
}else if(contar == 1){
    console.log(`Foi encontrado ${contar} letra "E" ou "e".`);
}else{
    console.log(`Foi encontradas ${contar} letras "E" ou "e".`);
}
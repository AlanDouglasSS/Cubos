const numeros = [3, 4, 7, 8, 1, 6, 5, 10];


let newArray = [];

for(i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        newArray.push(numeros[i]);
    }
}

console.log(newArray);
let soma = newArray[0]+newArray[1]+newArray[2]+newArray[3];
console.log(`A soma dos elementos é : ${soma}`);


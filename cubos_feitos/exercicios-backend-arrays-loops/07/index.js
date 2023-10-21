const nomes = ["Ana", "Joana", "Carlos", "amanda"];

newArray = [];

for(i = 0; i < nomes.length; i++){
    if(nomes[i].toUpperCase().startsWith('A', 'a')){        
        newArray.push(nomes[i]);
    }
}

console.log(newArray);
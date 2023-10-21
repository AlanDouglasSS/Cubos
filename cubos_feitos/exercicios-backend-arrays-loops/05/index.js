const original = [1, 4, 12, 21, 53, 88, 112];

let i = 0;
let newArray = [];

while(i < original.length){    
    i++
    if(original[i] % 2 === 0){
        
        newArray.push(original[i]);
        
    }
    
}
console.log(newArray);

i++
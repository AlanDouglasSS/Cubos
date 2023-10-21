const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

for(let i = 0; i < filaDeFora.length; i++) {
  if(filaDeDentro.length === 5) {
    break;
  }
  for(let j = 0; j < filaDeFora.length; j++) {
    if(filaDeDentro.length === 5) {
      break;
    }
    if(filaDeDentro.indexOf(filaDeFora[j]) === -1) {
      filaDeDentro.push(filaDeFora[j]);
      filaDeFora.splice(j, 1);
      j--;
    }
  }
}

console.log(filaDeDentro);
console.log(filaDeFora);
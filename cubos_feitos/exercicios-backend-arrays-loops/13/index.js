const disjuntores = [false, false, true, false, false, true, false, false];

const disjuntoresOn = [];

for(let i = 0; i < disjuntores.length; i++) {
  if(disjuntores[i]) {
    disjuntoresOn.push(i);
  }
}

console.log(disjuntoresOn);


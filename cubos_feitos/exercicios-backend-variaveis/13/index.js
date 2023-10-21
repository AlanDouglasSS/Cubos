//CALCULAR AREA TOTAL DE UM CILINDRO COM 13.5 DE ALTURA E BASE COM 3.5

//A = 2 * PI * R * H;

raio = 3.5;
let altura = 13.5;
let area = 2 * Math.PI * Math.pow(raio, 2) * altura;
console.log(`A area total do cilindro e "${area.toFixed(2)}"`);
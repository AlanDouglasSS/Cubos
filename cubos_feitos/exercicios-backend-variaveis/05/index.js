x1 = 3;
x2 = 5;
y1 = 4;
y2 = 7;

let deltaX = x2 - x1;
let deltaY = y2 - y1;
let raiz_deltaX = Math.pow(deltaX, 2);
let raiz_deltaY = Math.pow(deltaY, 2);
let soma_raiz =raiz_deltaX + raiz_deltaY;
let result = Math.sqrt(soma_raiz);
console.log(result.toFixed(2));

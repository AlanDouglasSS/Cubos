const lodash = require('lodash');

let array = [2, 3, 5, 6, 9, 11, 12, 12, 22, 11, 3];

let filtro = lodash.uniq(array);
console.log(filtro);
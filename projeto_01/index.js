/*
const lodash = require('lodash');

let array = [2, 3, 5, 6, 9, 11, 12, 12, 22, 11, 3];

let filtro = lodash.uniq(array);
console.log(filtro);
*/

//============MÉTODO 2======

const {uniq} = require('lodash');

let array2 = [5, 7, 8, 9, 9, 11, 13, 19, 19, 21, 28];
console.log(uniq(array2));
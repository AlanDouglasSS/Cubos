//PROMOCAO DE 37%!
let valor_tenis = 152.5;
let desconto = 37;
let operation = valor_tenis * desconto / 100;
let venda = valor_tenis - operation
let format = venda.toFixed(2).replace('.', ',');
console.log('R$ '+format);
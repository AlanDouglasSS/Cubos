//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;

if (quantidadeDeAguaIngerida < 1.5) {
  console.log("Risco Alto - Você está ingerindo pouquissima água, beba mais água!");
} else if (quantidadeDeAguaIngerida <= 3) {
  console.log("Risco Moderado - Você está ingerindo pouca água, beba mais!");
} else {
  console.log("Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!");
}
/*
Explicação:

    Criei uma constante quantidadeDeAguaIngerida e atribuímos o valor 2, mas esse valor poderia ser alterado para testar diferentes cenários.
    Em seguida, criamos uma estrutura condicional if...else if...else para avaliar a quantidade de água ingerida e imprimir a mensagem correspondente.
    Na primeira condição, verifica se a quantidade de água ingerida é menor que 1.5 litros. Se for, o risco é alto e imprimimos a mensagem correspondente.
    Na segunda condição, verifica se a quantidade de água ingerida é menor ou igual a 3 litros. Se for, o risco é moderado e imprimimos a mensagem correspondente.
    Na última condição, verifica se a quantidade de água ingerida é maior que 3 litros. Se for, o risco é baixo e imprimimos a mensagem correspondente.
*/
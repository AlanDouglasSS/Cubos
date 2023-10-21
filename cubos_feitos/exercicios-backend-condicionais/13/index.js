//tipo de pagamento (dinheiro, credito, debito, cheque).
const formaPagamento = "debito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;


const desconto = formaPagamento === "credito" ? 0.05 :
                  formaPagamento === "cheque" ? 0.03 :
                  formaPagamento === "debito" || formaPagamento === "dinheiro" ? 0.1 :
                  (console.log("Forma de pagamento inválida"), null);

const valorFinal = desconto ? valorDoProduto - (valorDoProduto * desconto) : null;
const valorFinalFormatado = valorFinal ? parseFloat(valorFinal.toFixed(2)) : null;

console.log(valorFinal ? `Valor final do produto: R$ ${valorFinalFormatado}` : null);

/*

    Na primeira linha, tem uma constante chamada desconto.
    Na segunda, terceira e quarta linhas, etem a estrutura ternária para atribuir um valor a desconto. 
    A estrutura está testando qual é a forma de pagamento escolhida e, dependendo do resultado, atribuindo um valor de desconto.
    Se a forma de pagamento for crédito, o valor de desconto será 0.05.
    Se a forma de pagamento for cheque, o valor de desconto será 0.03.
    Se a forma de pagamento for débito ou dinheiro, o valor de desconto será 0.1.
    Se nenhuma das condições acima for atendida, uma mensagem de erro será exibida 
    no console e a constante desconto receberá o valor null.
*/

    //const valorFinal = desconto ? valorDoProduto - (valorDoProduto * desconto) : null;
    //const valorFinalFormatado = valorFinal ? parseFloat(valorFinal.toFixed(2)) : null;
/*
    Tem umm constante valorFinal e atribuindo um valor dependendo da constante desconto.

    Se desconto tiver um valor diferente de null, significa que há um desconto a ser aplicado. 

    É feito o calculo do valor final do produto subtraindo o valor do produto pelo valor do desconto. 
    Se desconto for null, a constante valorFinal receberá o valor null.

    Tem uma constante valorFinalFormatado e atribuindo um valor dependendo da constante valorFinal.
    Se valorFinal tiver um valor diferente de null, significa que o cálculo do valor final foi feito com sucesso. 

    O valor final é formatado para ter apenas 2 casas decimais e atribuímos esse valor à constante 
    valorFinalFormatado. Se valorFinal for null, a constante valorFinalFormatado receberá o valor null.
*/

    //console.log(valorFinal ? `Valor final do produto: R$ ${valorFinalFormatado}` : null);


/*
    É exibido a ultima linha no console o valor final do produto formatado em reais, ou null se não houver valor final calculado.

    A expressão valorFinal ? é uma forma compacta de escrever um if que verifica se valorFinal é 
    diferente de null. Se for, exibimos a mensagem de valor final formatado. Se não for, exibimos null.
*/
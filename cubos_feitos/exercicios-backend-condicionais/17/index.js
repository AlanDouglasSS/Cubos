//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;


const valorRestante = valorDoProduto - valorPago;
const valorDaParcela = valorDoProduto / quantidadeDoParcelamento;
const parcelasRestantes = quantidadeDoParcelamento - Math.floor(valorPago / valorDaParcela);

const mensagem = parcelasRestantes > 0 
  ? `Restam ${parcelasRestantes} parcelas de R$${valorDaParcela.toFixed(2).replace('.',',')}`
  : `Pagamento concluído`;

console.log(mensagem);

/*

Explicação:

    A estrutura mensagem = parcelasRestantes > 0 ? ... : ... verifica se ainda restam parcelas a serem pagas. 
    Se sim, a mensagem é definida como “Restam x parcelas de R$y”. 
    Se não, a mensagem é definida como “Pagamento concluído”.
    Por fim, imprimimos a mensagem no console com o console.log().
*/
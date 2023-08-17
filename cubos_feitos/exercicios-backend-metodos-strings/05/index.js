const numeroCartao = '1111222233334444';

function esconderNumeroCartao(numero) {
  // Obter os primeiros quatro e os últimos quatro dígitos do número do cartão
  const quatroPrimeiros = numero.slice(0, 4);
  const quatroUltimos = numero.slice(-4);

  // Substituir os dígitos do meio por asteriscos
  const digitosOcultos = numero.slice(4, -4).replace(/\d/g, '*');

  // Juntar os quatro primeiros, os dígitos ocultos e os quatro últimos
  const numeroFormatado = quatroPrimeiros + digitosOcultos + quatroUltimos;

  console.log(numeroFormatado);
}

esconderNumeroCartao(numeroCartao); // 1111********4444

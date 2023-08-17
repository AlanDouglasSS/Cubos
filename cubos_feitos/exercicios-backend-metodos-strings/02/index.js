
function formatarCPF(cpf) {
    // Remover caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');
  
    // Verificar se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
      console.log("CPF Inválido");
      return;
    }
  
    // Formatar o CPF
    const cpfFormatado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    console.log(cpfFormatado);
  }
  
  function formatarCNPJ(cnpj) {
    // Remover caracteres não numéricos
    cnpj = cnpj.replace(/\D/g, '');
  
    // Verificar se o CNPJ possui 14 dígitos
    if (cnpj.length !== 14) {
      console.log("CNPJ Inválido");
      return;
    }
  
    // Formatar o CNPJ
    const cnpjFormatado = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    console.log(cnpjFormatado);
  }
  
  // Teste com exemplos
  const cpfExemplo1 = "12309";
  const cpfExemplo2 = "12345678900";
  const cnpjExemplo1 = "12345678900";
  const cnpjExemplo2 = "12345678000199";
  
  formatarCPF(cpfExemplo1); // CPF Inválido
  formatarCPF(cpfExemplo2); // 123.456.789-00
  formatarCNPJ(cnpjExemplo1); // CNPJ Inválido
  formatarCNPJ(cnpjExemplo2); // 12.345.678/0001-99
  
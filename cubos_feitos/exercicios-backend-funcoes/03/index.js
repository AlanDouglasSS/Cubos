//REDEFININCO O OBJETO DO CARRINHO
const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
      { id: 1, nome: "Camisa", qtd: 3, precoUnit: 3000 },
      { id: 2, nome: "Bermuda", qtd: 2, precoUnit: 5000 }
    ],
    // FUNÇÃO PARA IMPRIMIR O RESUMO DO CARRINHO
    imprimirResumo() {
        //INICIALIZANDO AS VARIAVEIS TOTALITENS E TOTALPAGAR
      let totalItens = 0;
      let totalPagar = 0;
  
      //PERCORRENDO O ARRAY DE PRODUTOS
      for (let produto of this.produtos) {
        totalItens += produto.qtd;
        totalPagar += produto.qtd * produto.precoUnit;
      }
      
      //IMPRIMINDO O RESUMO DO CARRINHO NO CONSOLE
      console.log(`Cliente: ${this.nomeDoCliente}`);
      console.log(`Total de itens: ${totalItens} itens`);
      console.log(`Total a pagar: R$ ${totalPagar.toFixed(2)}`);
    }
  };
  
  //FUNÇÃO PARA ADICIONAR UM PRODUTO AO CARRINHO
  function addProdutoAoCarrinho(carrinho, produto) {
    //VERIFICANDO SE O PRODUTO JÁ EXISTE NO CARRINHO
    const index = carrinho.produtos.findIndex(p => p.id === produto.id);
  
    //SE O PRODUTO JÁ EXISTE, ATUALIZE A QUANTIDADE
    if (index !== -1) {
      carrinho.produtos[index].qtd += produto.qtd;
    } 
    //SE O PRODUTO NÃO EXISTIR, ADICIONAR AO CARRINHO
    else {
      carrinho.produtos.push(produto);
    }
  }
  
  //CHAMANDO A FUNÇÃO IMPRIMIRESUMO PARA EXIBIR O RESUMO DO CARRINHO INICIAL
  carrinho.imprimirResumo();
  
  //ADICIONANDO O NOVO PRODUTO AO CARRINHO
  const novaBermuda = { id: 2, nome: "Bermuda", qtd: 3, precoUnit: 5000 };
  
  //CHAMAANDO NOVAMENTE A FUNÇÃO IMPRIMIR PARA EXIBIR O RESUMO ATUALIZADO DO CARRINHO
  addProdutoAoCarrinho(carrinho, novaBermuda);
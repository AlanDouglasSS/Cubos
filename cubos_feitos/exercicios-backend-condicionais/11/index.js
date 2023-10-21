//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 3000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 47;

/*Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). 
Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
*/
const totalJaPagoPeloAluno = 10000;

if(rendaMensalEmCentavos > 2000){    
    if(mesesDecorridos < 60){
        let mensalidade = rendaMensalEmCentavos * 18 / 100;
        console.log(`O valor da parcela mensal será de : "R$ ${mensalidade.toFixed(2).replace('.',',')}"`);
        let value = mensalidade * mesesDecorridos;
        let restantes = 60 - mesesDecorridos;
        console.log(`Meses a pagar: "${restantes}"`);
        console.log(`Total pago até o momento é de: "R$ ${value.toFixed(2).replace('.',',')}"`);         
    }else{
        console.log(`Parabéns, você quitou o seu curso "Desenvolvedor de Software" *-*!`);
    }
}else{
    console.log("Querido aluno, fique tranquilo! Você so pagará quando conseguir o emprego dos sonhos *-*!")
}

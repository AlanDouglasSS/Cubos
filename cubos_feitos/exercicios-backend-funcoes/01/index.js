

const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};
    

function corrigirProva(prova){
    var valorNota = 0;
    
    for(let obj of prova.questoes){ //PERCORRENDO OS ELEMENTOS DA PROPRIEDADE "QUESTÕES" NO OBJETO
               
              
        if(obj.resposta === obj.correta){            
            valorNota += 2;
        }                                   //CONDICIONAIS PARA QUESTÕES CERTAS E ERRADAS

        if(obj.resposta != obj.correta){            
            valorNota += 0;    
        }    
        
    }
    
    if(valorNota != 0){
        var totalQuest = valorNota / 2 //OBTENDO QUANTIDADE DE QUESTÕES CERTAS
    }

    console.log(`O aluno(a) Pedro acertou ${totalQuest} e obteve nota ${valorNota}`)

}
corrigirProva(prova)

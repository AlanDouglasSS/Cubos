function primary(){    
    let entradaAlt = document.getElementById('height');
    let entradaPs = document.getElementById('weight');       

    entradaAlt.addEventListener('input', EventeClick);
    entradaPs.addEventListener('input', EventeClick);

    EventeClick();
}

function calcularIMC(height, weight){
    let operation = weight / (height * height);
    return operation;
}

function EventeClick(){
    let entradaAlt = document.getElementById('height');
    let entradaPs = document.getElementById('weight');        

    let result = document.getElementById('result');

    let p1 = Number(entradaAlt.value) ;
    let p2 = Number(entradaPs.value) ;        

    let show_calculation = calcularIMC(p1, p2);

    let format_show = show_calculation.toFixed(2).replace('.', ',');

    result.textContent = format_show;    



}

primary();
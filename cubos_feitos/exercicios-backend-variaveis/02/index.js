function reset(){
    let entrada = document.getElementById('celsius').value;    

    const fator = 1.8;
    const fahrenheit = 32;

    let celcius = parseFloat(entrada);

    let operation = fator * celcius + fahrenheit;

    let result = document.getElementById('result');

    let format = operation.toFixed(1).replace('.',',');

    result.textContent = format;

    reset();

}

document.getElementById('reset').addEventListener('click', reset);
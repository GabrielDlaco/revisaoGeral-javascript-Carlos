const btnCalcular = document.getElementById('btnCalcular');

const calculo = () => {
    const valor1 = document.getElementById('num1').value;
    const valor2 = document.getElementById('num2').value;
    const operador = document.getElementById('operacao').value;
    const outResposta = document.getElementById('outResposta');

    if(operador === "soma"){
        const resultado = parseFloat(valor1) + parseFloat(valor2);
        outResposta.textContent = resultado;
    } else if(operador === "subtracao"){
        const resultado = parseFloat(valor1) - parseFloat(valor2);
        outResposta.textContent = resultado;
    }
    else if(operador === "multiplicacao"){
        const resultado = parseFloat(valor1) * parseFloat(valor2);
        outResposta.textContent = resultado;
    }
    else if(operador === "divisao"){
        const resultado = parseFloat(valor1) / parseFloat(valor2);
        outResposta.textContent = resultado;
    }
}

btnCalcular.addEventListener('click', calculo);
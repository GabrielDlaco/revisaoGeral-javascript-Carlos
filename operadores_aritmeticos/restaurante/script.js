const btn = document.getElementById('btnCalcular');

const calculoBuffet = () => {
    const precoKg = document.getElementById('inQuilo').value;
    const consumoGr = document.getElementById('inConsumo').value;

    const consumoKg = consumoGr / 1000;

    const valorPagar = precoKg * consumoKg.toFixed(2);
    document.getElementById('outValor').textContent = `Valor a pagar R$ ${valorPagar.toFixed(2)}`;
}

btn.addEventListener('click', calculoBuffet);
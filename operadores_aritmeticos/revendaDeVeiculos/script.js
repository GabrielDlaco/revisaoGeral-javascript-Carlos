const btn = document.getElementById('btnVerPromocao');

const calcular = () => {
    const veiculo = document.getElementById('inVeiculo').value;
    const preco = document.getElementById('inPreco').value;

    const entrada = preco * 0.5;
    const parcela = (preco - entrada) / 12;

    const outVeiculo = document.getElementById('outVeiculo');
    const outEntrada = document.getElementById('outEntrada');
    const outParcela = document.getElementById('outParcela');

    outVeiculo.innerHTML = `Veículo: ${veiculo}`;
    outEntrada.innerHTML = `Entrada de R$ ${entrada.toFixed(2)}`;
    outParcela.innerHTML = `+ 12x de R$ ${parcela.toFixed(2)}`;
}

btn.addEventListener('click', calcular);
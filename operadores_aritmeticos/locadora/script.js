const btn = document.getElementById('btnConverter');

const horaMinuto = () => {
    const titleFilm = document.getElementById('inTitulo').value;
    const duracao = document.getElementById('inDuracao').value;

    const duracaoHora = duracao * 60;
    const outTitulo = document.getElementById('outTitulo');
    const outResposta = document.getElementById('outResposta');

    outTitulo.innerHTML = `Título: ${titleFilm}`;
    outResposta.innerHTML = `Duração: ${duracaoHora} minutos`;
}

btn.addEventListener('click', horaMinuto);
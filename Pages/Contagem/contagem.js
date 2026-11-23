function contagemRegressiva() {
  const dezena = document.querySelector('.card1 h1');
  const unidade = document.querySelector('.card2 h2');
  const legenda = document.querySelector('h4');

  function atualizar() {
    const agora = new Date();
    const hoje = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
    const alvo = new Date(2026, 11, 12);

    const msPorDia = 1000 * 60 * 60 * 24;
    let restantes = Math.round((alvo - hoje) / msPorDia);

    if (restantes < 0) restantes = 0;

    const texto = String(restantes).padStart(2, '0');
    dezena.textContent = texto[0];
    unidade.textContent = texto[1];

    if (restantes === 0) {
      legenda.textContent = "O Capivara 2026 é hoje!";
    } else if (restantes === 1) {
      legenda.textContent = "dia para o Capivara 2026!";
    }
  }

  atualizar();
  setInterval(atualizar, 1000 * 60 * 60);
}

window.addEventListener('DOMContentLoaded', contagemRegressiva);


function verificarTela(){
const body = document.querySelector('body');
const largura = document.documentElement.clientWidth;
const h1 = document.getElementById('h11');
console.log(largura);
if(largura < 600){
body.classList.add('celular');
h1.innerHTML = "Acampamento Maanaim"
}
else{
    body.classList.remove('celular');
}
}
window.addEventListener('resize', verificarTela);
window.addEventListener('DOMContentLoaded', verificarTela);

function activateOthers(){
const others = document.querySelector('.others');
others.addEventListener('click', () => {
others.classList.toggle('ativado');
});
}
window.addEventListener('DOMContentLoaded', activateOthers);

function verificarTela(){
const largura = document.documentElement.clientWidth;
const body = document.querySelector('body');

if(largura < 720){
console.log("celular");
body.classList.toggle('celular');
}
else if(largura > 720 && largura < 1200){
console.log("tablet");
}

}

function activateOthers(){
const others = document.querySelector('.others');
others.addEventListener('click', () => {
others.classList.toggle('ativado');


});
}
window.addEventListener('DOMContentLoaded', verificarTela);
window.addEventListener('DOMContentLoaded', activateOthers);
window.addEventListener('resize', verificarTela);
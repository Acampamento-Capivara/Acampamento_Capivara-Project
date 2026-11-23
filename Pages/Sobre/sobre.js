function verificarTela(){
const largura = document.documentElement.clientWidth;
const body = document.querySelector('body');
if(largura <= 600){
body.classList.add('celular');
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
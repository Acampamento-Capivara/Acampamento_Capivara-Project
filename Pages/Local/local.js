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

const others = document.querySelector('.others');
others.addEventListener('click', () => {
others.classList.toggle('ativado');

});



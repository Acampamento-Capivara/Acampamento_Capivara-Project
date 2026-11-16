function redes(){
const rede1 = document.querySelector('.rede1'); 
const rede2 = document.querySelector('.rede2'); 
const rede3 = document.querySelector('.rede3'); 
const rede4 = document.querySelector('.rede4'); 
const clicable_rede2 = document.querySelector('.clicaa2'); 
const clicable_rede3 = document.querySelector('.clicaa3'); 
const clicable_rede4 = document.querySelector('.clicaa4'); 
rede1.addEventListener('click', () => {
rede1.classList.toggle('click');
});
rede2.addEventListener('click', () => {
rede2.classList.toggle('click');
});
rede3.addEventListener('click', () => {
rede3.classList.toggle('click');
});
clicable_rede2.addEventListener('click', () => {
window.location.href = "https://instagram.com/agencia.diva";
});
clicable_rede3.addEventListener('click', () => {
window.location.href = "https://www.facebook.com/diva.entretenimento";
});
clicable_rede4.addEventListener('click', () => {
window.location.href = "https://linktr.ee/divaentretenimento";
});
rede4.addEventListener('click', () => {
rede4.classList.toggle('click');
});
}
window.addEventListener('DOMContentLoaded', redes);
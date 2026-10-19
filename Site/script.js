
/* Todos os direitos voltados a Acampamento Capivara
Site criado por Carlos Augusto Nunes Costa Neto em 2026
71 98242-1441 | carlosn.developer@gmail.com
*/

const fotos = [
  "Imagens/Landing.png",
  "Imagens/IMG1.jpg",
  "Imagens/IMG2.jpg",
  "Imagens/img3.jpg"
];

let atual = 0;

const imagem = document.getElementById("slide");
const indicadores = document.getElementById("indicadores");

// =========================
// CRIAR AS BOLINHAS
// =========================

fotos.forEach((_, index) => {

  const bolinha = document.createElement("button");

  bolinha.classList.add("bolinha");

  bolinha.addEventListener("click", () => {

    atual = index;

    mostrarFoto();

  });

  indicadores.appendChild(bolinha);

});


// =========================
// MOSTRAR FOTO
// =========================

function mostrarFoto() {

  imagem.classList.remove("entrando");
  imagem.classList.add("saindo");

  setTimeout(() => {

    imagem.src = fotos[atual];

    imagem.classList.remove("saindo");
    imagem.classList.add("entrando");

    atualizarIndicadores();

    setTimeout(() => {
      imagem.classList.remove("entrando");
    }, 400);

  }, 250);
}


// =========================
// PRÓXIMA FOTO
// =========================

function proximaFoto() {

  atual++;

  if (atual >= fotos.length) {
    atual = 0;
  }

  mostrarFoto();
}


// =========================
// FOTO ANTERIOR
// =========================

function fotoAnterior() {

  atual--;

  if (atual < 0) {
    atual = fotos.length - 1;
  }

  mostrarFoto();
}


// =========================
// ATUALIZAR BOLINHAS
// =========================

function atualizarIndicadores() {

  const bolinhas = document.querySelectorAll(".bolinha");

  bolinhas.forEach((bolinha, index) => {

    if (index === atual) {
      bolinha.classList.add("ativa");
    } else {
      bolinha.classList.remove("ativa");
    }

  });

}


// =========================
// COMEÇAR COM A PRIMEIRA ATIVA
// =========================

atualizarIndicadores();


// =========================
// VERIFICAR TELA
// =========================

function verificarTela() {
    const largura = document.documentElement.clientWidth;

    const slider = document.querySelector('.slider');
    const body = document.body;
    const nav = document.querySelector('nav');
    const ul = document.querySelector('ul');
    const logo = document.querySelector('.logo');
    const others = document.querySelector('.others');
    const prev = document.querySelector('.prev');
    const prox = document.querySelector('.prox');
    const indicadores = document.querySelector('.indicadores');
    const h1 = document.getElementById('h1');
    const hb = document.querySelector('.home-button');
    const h2 = document.querySelector('h2');

    if (largura <= 600) {
        // CELULAR
        document.querySelectorAll('h1 br').forEach(br => br.remove());

        slider.classList.add('slider-celular');
        body.classList.add('tela-celular');
        body.classList.remove('tablet');
        nav.classList.add('nav-celular');

        ul.style.opacity = '0';
        logo.style.opacity = '0';
        others.style.opacity = '1';

        prev.classList.add('ativado');
        prox.classList.add('ativado');
        indicadores.classList.add('ativado');
        h1.classList.add('ativado');
        hb.classList.add('ativado');
        h2.classList.add('ativado');

        console.log('Está no celular!');

    } else if (largura <= 1124) {
        // TABLET
        slider.classList.remove('slider-celular');
        body.classList.remove('tela-celular');
        body.classList.add('tablet');
        nav.classList.remove('nav-celular');
       
        ul.style.opacity = '1';
        
        others.style.opacity = '0';

       


        prev.classList.remove('ativado');
        prox.classList.remove('ativado');
        indicadores.classList.remove('ativado');
        h1.classList.remove('ativado');
        hb.classList.remove('ativado');
        h2.classList.remove('ativado');

        console.log('Está no tablet!');

    } else {
        // PC
        slider.classList.remove('slider-celular');
        body.classList.remove('tela-celular');
        body.classList.remove('tablet');
        nav.classList.remove('nav-celular');

        ul.style.opacity = '1';
        logo.style.opacity = '1';
        others.style.opacity = '0';

        prev.classList.remove('ativado');
        prox.classList.remove('ativado');
        indicadores.classList.remove('ativado');
        h1.classList.remove('ativado');
        hb.classList.remove('ativado');
        h2.classList.remove('ativado');

        console.log('Está no PC!');
    }
}

document.addEventListener('DOMContentLoaded', verificarTela);
window.addEventListener('resize', verificarTela);


// =========================
// MENU HAMBÚRGUER
// =========================

function activateOthers(){
  const nav = document.querySelector('nav');
  const others = document.getElementById('others');
  const li1 = document.querySelector('.li1');
  const li2 = document.querySelector('.li2');
  const li3 = document.querySelector('.li3');
  const li4 = document.querySelector('.li4');
  const li5 = document.querySelector('.li5');
  const li6 = document.querySelector('.li6');
  const ul = document.querySelector('ul');
  const nav_button = document.querySelector('nav button');

  others.addEventListener('click', () => {
    console.log("click");
    others.classList.toggle('ativado');
    ul.classList.toggle('ativado');
    nav.classList.toggle('ativado');
    li1.classList.toggle('ativado');
    li2.classList.toggle('ativado');
    li3.classList.toggle('ativado');
    li4.classList.toggle('ativado');
    li5.classList.toggle('ativado');
    li6.classList.toggle('ativado');
    ul.style.opacity = "1";

    nav_button.classList.toggle('ativado');
  });
}

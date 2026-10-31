const parametros = new URLSearchParams(window.location.search);

if (parametros.has('gdance')) {
    window.location.href = 'https://acampamentocapivara.com.br/gdance';
}

else if (parametros.has('move')) {
    window.location.href = '/Pages/Redirecionar/move.html';
}

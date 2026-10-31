const parametros = new URLSearchParams(window.location.search);

if (parametros.has('gdance')) {
    window.location.href = 'https://acampamentocapivara.com.br/gdance';
}

else if (parametros.has('arenareal')) {
    window.location.href = 'https://acampamentocapivara.com.br/arenareal';
}
else if (parametros.has('vitalmed')) {
    window.location.href = 'https://acampamentocapivara.com.br/vitalmed';
}
else if (parametros.has('happy')) {
    window.location.href = 'https://acampamentocapivara.com.br/happy';
}
else if (parametros.has('stripulia')) {
    window.location.href = 'https://acampamentocapivara.com.br/stripulia';
}

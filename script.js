const frases = [
    "Jesus te ama!",
    "Deus é fiel!",
    "Nunca desista!",
    "A fé move montanhas!",
    "Confia no Senhor!",
    "Espere no Senhor!",
    "Deus tem um plano para você!",
    "O amor de Deus é eterno!",
    "Tenha esperança!",
    "Jesus é o caminho!"
];

const versiculos = [
    "João 3:16",
    "Salmos 100:5",
    "Gálatas 6:9",
    "Mateus 17:20",
    "Provérbios 3:5",
    "Isaías 40:31",
    "Jeremias 29:11",
    "Romanos 8:39",
    "Romanos 15:13",
    "João 14:6"
];


function obterFraseAleatoria() {
    return frases[Math.floor(Math.random() * frases.length)];
}


const secaoFrase = document.getElementById('frase');
const paragrafoVersiculo = document.getElementById('versiculo');


const fraseAleatoria = obterFraseAleatoria();
secaoFrase.textContent = fraseAleatoria;


const indiceFrase = frases.indexOf(fraseAleatoria);


paragrafoVersiculo.textContent =  versiculos[indiceFrase];

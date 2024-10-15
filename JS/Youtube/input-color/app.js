const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;


function actualizarColor(rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

inputRojo.addEventListener('input', (e) => {
    rojo = e.target.value; // target es el elemento blanco
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul)
});

inputVerde.addEventListener('input', (e) => {
    verde = e.target.value; // target es el elemento blanco
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul)
});

inputAzul.addEventListener('input', (e) => {
    azul = e.target.value; // target es el elemento blanco
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul)
});
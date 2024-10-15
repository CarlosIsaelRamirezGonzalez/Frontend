const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0;
let int = setInterval(blurring, 30); // Se llama a la funcion blurring cada 30 milisegundos

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int); // Deja de usar interval
    }

    loadText.innerText = `${ load }%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${ scale(load, 0, 100, 30, 0) }px)`
}


const scale = (num, inMin, inMax, outMin, outMax) => {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
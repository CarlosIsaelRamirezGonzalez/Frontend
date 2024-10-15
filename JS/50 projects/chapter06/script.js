const boxes = document.querySelectorAll('.box');

const checkBoxes = () => {
    // Calcula el punto de activación que es el 80% de la altura del viewport
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        // Obtiene la posición superior del elemento box respecto al viewport
        const boxTop = box.getBoundingClientRect().top;

        // Si la parte superior de la caja está por encima del triggerBottom
        // añade la clase 'show', de lo contrario, remuévela
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

// Añade un event listener al evento de scroll para llamar a checkBoxes
window.addEventListener('scroll', checkBoxes);

// Llama a checkBoxes inicialmente para verificar los elementos visibles al cargar la página
checkBoxes();

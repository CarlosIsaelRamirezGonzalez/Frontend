const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

function update() {
    circles.forEach((circle, index) => {
        (index < currentActive) // Si avanzo
            ? circle.classList.add('active') // Si es true
            : circle.classList.remove('active') // else
    })
    
    const actives = document.querySelectorAll('.active');
    
    console.log((actives.length - 1) / (circles.length - 1) * 100 + "%");

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'// Porque en realidad da 3 pasos, del 1-2 (1), 2-3 (2), 3-4 (3)

    if (currentActive == 1) {
        prev.disabled = true;
    } else if (currentActive == circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

}

prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
})

next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
})

// Eventos

function mostrarClic(e) { // No es buena idea ponerlo en el html, mejor usar el .addEvenetListener que es mas dinamico
    console.log('clic on ' + e.target.innerText);
}

// .addEventListener
const toppings = document.getElementsByClassName('topping');

for (topping of toppings) {
    // Alternativa a usar topping.addEventListener('click', mostrarClic);
    topping.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    });
}



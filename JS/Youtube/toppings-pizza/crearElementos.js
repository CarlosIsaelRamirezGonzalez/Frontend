const listaToppings = document.getElementById('lista-toppings') // Obtenemos referencia donde agregaremos el elemento

const toppingNuevo = document.createElement('li'); // Creamos un li
toppingNuevo.classList.add('topping', 'fondo-marron'); // Le añadimos una clase
toppingNuevo.innerText = "Queso extra"; // Agregar texto

listaToppings.append(toppingNuevo); // Añadir el nuevo elemento 
listaToppings.remove(); // Remueve todo el elemento


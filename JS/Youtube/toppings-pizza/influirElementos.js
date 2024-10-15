// Influir en el CSS
const primerTopping = document.querySelector('.topping'); // Toma el primero de la lista
primerTopping.style.backgroundColor = 'blue';
primerTopping.style.color = "#6dff00";
primerTopping.style.textTransform = "uppercase";

console.log(primerTopping.style); // <- Imprime todas las propiedades que podemos cambiar

// Influir en el texto
const listaToppings = document.getElementById('lista-toppings');
// Acceder al texto
console.log(listaToppings.innerText);
console.log(listaToppings.textContent); // Con identacion
console.log(listaToppings.innerHTML); // Estructura HTML
// Modificar el texto
const titulo = document.getElementById('titulo');
titulo.innerText = "Mis toppings favoritos";

// Influir en atributos
const enlace = document.getElementsByTagName('a');
console.log(enlace[0].getAttribute('href'));
enlace[0].getAttribute('href') // Remueve el atributo
enlace[0].setAttribute('href', 'https://www.youtube.com/watch?v=koiPxFFiqJ4&t=9288s')

// Influir en clases de CSS
console.log(primerTopping.classList);
primerTopping.classList.add('green-text'); // Agregar clases
var hasClass = primerTopping.classList.contains('fondo-marron'); // Nos dice si contiene una clase
console.log(hasClass);
primerTopping.classList.remove('topping') // Remover la clase 
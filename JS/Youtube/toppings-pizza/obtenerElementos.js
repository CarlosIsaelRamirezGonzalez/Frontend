// getElementById
const contenedor = document.getElementById('contenedor'); // Constante porque no se va a cambiar una vez se tenga 
console.log(typeof contenedor.innerHTML);

const titulo = document.getElementById('titulo');
console.log(titulo.tagName)

// getElementsByClassName()

const toppings = document.getElementsByClassName('topping');
console.log(toppings.length); // Cuantos elementos que tengan esa clase
console.log(toppings[0]); // Nos arroja el primer elemento, podemos agregarlo el .id para tener el elemento

// getElemntsByTagName()
const misToppings = document.getElementsByTagName('li'); // Todos los elementos de esa etiqueta
console.log(misToppings);

// querySelector() 
const aceituna = document.querySelector('#aceitunas'); // Alterniva al selectElementById()
console.log(aceituna);

const primerToppingNaranja = document.querySelector('.topping.fondo-naranja');
console.log(primerToppingNaranja);

const elementoDentroDeLista = document.querySelector('ul li.fondo-naranja');
console.log(elementoDentroDeLista);

const elementoOperador = document.querySelector('ul li:not(.fondo-marron)');
console.log(elementoDentroDeLista);

// querySelectorAll()

const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja')
console.log(toppingsNaranja.length);


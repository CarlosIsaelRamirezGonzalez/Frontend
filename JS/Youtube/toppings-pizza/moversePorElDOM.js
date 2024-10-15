const listaToppings = document.getElementById('lista-toppings') // Obtenemos referencia donde agregaremos el elemento
console.log(listaToppings.parentElement);   
console.log(listaToppings.parentElement.parentElement);   
console.log(listaToppings.parentElement.parentElement.parentElement);       


console.log(listaToppings.firstChild); // Se puede hacer tambien un children[0] o firstElementChild, que firstChild nos regresa un nodo
console.log(listaToppings.children);       
console.log(listaToppings.previousElementSibling); // Obtiene el elemento hermano        



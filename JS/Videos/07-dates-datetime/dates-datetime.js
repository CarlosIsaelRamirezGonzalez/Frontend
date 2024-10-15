let d;

d = new Date();

d = d.toString();

d = new Date(2021, 0, 10, 12, 30, 42); // Año, mes, dia, hora, minuto,  segundos

d = new Date('2021-07-10T24:00:00');
d = new Date('07/10/2021 12:30:21'); 
d = new Date('2022-07-10');
d = new Date('07-10-2022');
d = d.getTime();

d = Date.now(); // Nos devuelve el número de milisegundos transcurridos desde el Epoch (1 de Enero de 1970) hasta el momento en que se llamó a Date.now(). 

d = new Date(1709832658024);

console.log(d);
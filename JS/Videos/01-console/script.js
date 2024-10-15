console.log(100);

console.log("Hello world");

console.log(20, 'Hello', true);

console.error("Alert");

console.warn('Warning');

console.table({name: 'Carlos', email: 'carlos@gmail.com'});

console.group("Simple");
console.error("Alert");
console.warn('Warning');
console.table({name: 'Carlos', email: 'carlos@gmail.com'});
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello world', styles);
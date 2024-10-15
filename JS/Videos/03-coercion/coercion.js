/*The coercion in js is the process of automatic conversion of a value 
to one kind of data to other, isn't less explicit than type conversion*/

let x;

x = 5 + '5'; // String -> Concatenation
x = 5 * '5'; // Number -> Multiplication
x = 5 + Number('5'); // Number -> Addition
x = 5 + null; // Number -> The result is just 5
x = Number(true); // Number -> The result is 1, cause True is equals to one
x = 5 + undefined; // Number -> The result is undefined

console.log(x, typeof x);
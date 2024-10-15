const name = "Carlos";

// x = name.lenght() -> You cannot use methods with this kind of string

const s = new String('Hello world');

x = s.length;
x = s[1]; // You can replace it with s.charAt(1);
x = s.toLowerCase();
x = s.toUpperCase();
x = s.indexOf('e');
x = s.substring(1, 5);
x = s.trim(); // Delete all white spaces
x = s.replace('world', 'John');
x = s.includes('Hello');
x = s.valueOf();
x = s.split(' '); // <- Split the words by space if you do ' '  and by letters if you do ''


console.log(x);
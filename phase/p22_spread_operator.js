// spread operator = ... allows an iterable such as an
//                   array or string to be expanded
//                   into separate elements
//                   (unpacks the elements)


let numbers = [1, 2, 3];

let maximum = Math.max(numbers); // doesn't work (NaN)
console.log(maximum);

maximum = Math.max(...numbers); // works (3)
let minimum = Math.min(...numbers); // works (1)

console.log(maximum);
console.log(minimum);

let username = 'Jodie Starling';
let letters = [...username];

console.log(letters);


let fruits = ['🍎', '🍊', '🍌'];
let vegetables = ['🥕', '🌽', '🥦'];

let foods = [...fruits, ...vegetables, '🍔', '🍟', '🍕'];

console.log(foods);
// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once
//                   (parameters) => some code


/*
function hello(){
    console.log(`hello`);
}

hello();
*/


const greet = (name, age) => {
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old`);
}

greet('John', 30);


setTimeout(() => {console.log('Hello');}, 2000);


const numbers = [1,2,3,4];
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);
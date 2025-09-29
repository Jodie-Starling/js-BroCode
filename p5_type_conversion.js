// type conversion = change the datatype of a value to another
//                   (string, numbers, booleans)

let age1 = window.prompt(`How old are you?`);

age1 += 1;

console.log(age1, typeof age1);  // "151" (if the user enters 15)


// convert age to a number
let age2 = window.prompt(`What is your age?`);
age2 = Number(age2);
age2 += 1;
console.log(age2, typeof age2);  // 16 (if the user enters 15)



let x = 'pizza';
let y = 'pizza';
let z = 'pizza';

x = Number(x);
y = String(y);
z = Boolean(z); // false = 0(a number, Not a String), null, undefined, NaN, "" (empty string)

console.log(x, typeof x);// NaN (Not a Number)
console.log(y, typeof y);
console.log(z, typeof z);
// variable = A container that stores a value.
//             Behaves as if it were the value it contains
//             number, string, boolean,

let x; // 1. declaration
x = 123; // 2. assignment
console.log(x);

let y = 4.6; // 3. Or declaration and assignment
console.log(y)

let age1 = 25;
console.log(`You are ${age1} years old.`);
console.log(typeof age1)  //number

price = 7.5
console.log(`The price is $${price}.`)
console.log(typeof price)  //number

let firstName = `kerr`;
console.log(typeof firstName);  //string
console.log(`Your name is ${firstName}.`)

let favoritefood = `sushi`;
console.log(typeof favoritefood);  //string
console.log(`Your favorite food is ${favoritefood}.`)

let email = `angel_shxy@qq.com`;
console.log(typeof email);  //string
console.log(`Your email is ${email}.`)

let online = true;
console.log(typeof online);  //boolean
console.log(`Are you online? ${online}.`)

let forSale = false;
console.log(typeof forSale);  //boolean
console.log(`Is it for sale? ${forSale}.`);

let fullName = `Miranda Kerr`;
let age2 = 40; // 变量可以被重新赋值，但不能被重新声明
               // 为避免和上面的age冲突，重命名为age1、age2
let isStudent = false;

document.getElementById(`p1`).textContent = `Your name is ${fullName}.`;
document.getElementById(`p2`).textContent = `You are ${age} years old.`;
document.getElementById(`p3`).textContent = `Are you a student? ${isStudent}.`;
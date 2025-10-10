// ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;

let age = 21;
let message1 = age >= 18 ? `You are an adult` : `You're a minor`;
console.log(message1);

let time = 16;
let greeting = time < 12 ? `Good morning!` : `Good afternoon!`;
console.log(greeting);

let student = true;
let message2 = student ? `You are a student.` : `You are NOT a student.`;
console.log(message2);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`You total is $${purchaseAmount - (purchaseAmount * discount / 100)}`);

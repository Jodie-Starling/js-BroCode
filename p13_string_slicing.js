// string slicing = creating a substring
//                  from a portion of another string

//                  string.slice(start, end)
//                  左闭右开


const fullName1 = `Jodie Starling`;

let firstName1 = fullName1.slice(0, 5);
let lastName1 = fullName1.slice(6, 14);

let lastChar1 = fullName1.slice(-2); // 负数从后往前数

console.log(firstName1);
console.log(lastName1);
console.log(lastChar1); // ng

const fullName2 = `Bro Code`;

let firstName2 = fullName2.slice(0, fullName2.indexOf(` `));
let lastName2 = fullName2.slice(fullName2.indexOf(` `)+1); // 直接到最后

console.log(firstName2); // Bro
console.log(lastName2); // Code

const email = `angel_shxy@qq.com`;

let username = email.slice(0, email.indexOf(`@`));
let extension = email.slice(email.indexOf(`@`)+1);

console.log(username); // angel_shxy
console.log(extension); // qq.com
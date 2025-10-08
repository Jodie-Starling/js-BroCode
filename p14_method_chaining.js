// method chaining = calling one method after another
//                   in one continuous line of code

// -------- NO METHOD CHAINING --------

let username1 = window.prompt(`Enter your username`);

username1 = username1.trim();
let letter1 = username1.charAt(0);
letter1 = letter1.toUpperCase();

let extraChars1 = username1.slice(1);
extraChars1 = extraChars1.toLowerCase();
username1 = letter1 + extraChars1;

console.log(username1);

// -------- METHOD CHAINING --------

let username2 = window.prompt(`Enter your username`);

username2 = username2.trim().charAt(0).toUpperCase() + username2.trim().slice(1).toLowerCase();

console.log(username2);
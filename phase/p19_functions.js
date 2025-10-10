// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.


function happyBirthday(username, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday to you!`);
    console.log(`You are ${age} years old!`);
}

happyBirthday(`Jodie`,20);
happyBirthday(`BroCode`,25);


// function add(x, y){
//     let result = x + y;
//     return result;
// }

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function isEven(num){
    return num % 2 === 0 ? true : false;
}

function isOdd(num){  // 参数可以自己命名
    return num % 2 !== 0 ? true : false;
}

let answer = add(2, 3); // 结果存储在 answer 变量中
console.log(answer);
console.log(subtract(5, 2));
console.log(multiply(3, 4));
console.log(divide(10, 2));
console.log(isEven(4));
console.log(isOdd(5));


function isValidEmail(email){
    return email.includes(`@`) ? true : false;
}

console.log(isValidEmail(`angel_shxy@qq.com`));
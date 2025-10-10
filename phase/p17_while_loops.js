// while loop = repeat some code WHILE some condition is ture

let username1;

while(username1 === `` || username1=== null){
    console.log(`You didn't enter your name!`);
    username1 = window.prompt(`Please enter your name:`);
}
console.log(`Hello ${username1}!`);


let username2 = ``;

do{
    username2 = window.prompt(`Enter your name:`);
}while(username2 ===`` || username2 === null);

console.log(`Hello ${username2}!`);

let loggedIn = true;
let username;
let password;

do{
    username = window.prompt(`Enter your username:`);
    password = window.prompt(`Enter your password:`);

    if(username === `myUsername` && password === `myPassword`){
        console.log(`You are logged in!`);
    } 
    else {
        loggedIn = false;
        console.log(`Incorrect username or password!`);
    }
}while(!loggedIn)
// How to accept user input

// 1. EAST WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox




let username1;

username1 = window.prompt(`What's your username?`);
console.log(username1);



let username2;

document.getElementById(`mySubmit`).onclick = function(){
    username2 = document.getElementById(`myText`).value;
    document.getElementById(`myH1`).textContent = `Hello, ${username2}`;
}
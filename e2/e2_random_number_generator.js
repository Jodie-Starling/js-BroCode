/*
const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) + min; // Generates a random integer between min and max
                                            // Math.random()  Generates a random number between 0 (inclusive) and 1 (exclusive)

console.log(randomNum);

*/

const myBtn = document.getElementById(`myBtn`);
const myLabel1 = document.getElementById(`label1`);
const myLabel2 = document.getElementById(`label2`);
const myLabel3 = document.getElementById(`label3`);
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myBtn.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
}
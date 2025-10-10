// IF STATEMENTS = if a condition is true, execute a block of code
//                 if not, do something else


/*
let age1 = 17;

if(age1 >= 100){             // 条件1和条件2的顺序不能换，一旦符合一个条件，就会skip后面的条件
    console.log(`You are too old to enter this site.`);
}
else if(age1 == 0){
    console.log(`You can't enter. You were just born!`);
}
else if(age1 >= 18){
    console.log(`You are old enough to enter this site.`);
}
else if(age1 < 0){
    console.log(`You are not born yet!`);
}
else{
    console.log(`You must be 18+ to enter this site.`);
}



let time = 9;

if(time < 12){
    console.log(`Good morning!`);
}
else{
    console.log(`Good afternoon!`);
}



let isStudent = true;
if(isStudent){
    console.log(`You are a student.`);
}
else{
    console.log(`You are not a student.`);
}



let age2 = 25;
let hasLicense = false;

if(age2 >= 16){
    console.log(`You are old enough to drive.`);
    if(hasLicense){
        console.log(`You have a license.`);
        console.log(`You can drive.`);
    }
    else{
        console.log(`You need a license to drive.`);
    }
}
else{
    console.log(`You must be 16+ to have a license.`);
}
*/


const myText = document.getElementById("myText");
const myBtn = document.getElementById("myBtn");
const result = document.getElementById("result");
let age = 0;

myBtn.onclick = function(){

    age = myText.value;
    age = Number(age);  // convert string to number
    if(age >= 100){
        result.innerHTML = `You are too old to enter this site.`;
    }
    else if(age == 0){
        result.textContent = `You can't enter. You were just born!`;
    }
    else if(age >= 18){
        result.textContent = `You are old enough to enter this site.`;
    }
    else if(age < 0){
        result.textContent = `You are not born yet!`;
    }
    else{
        result.textContent = `You must be 18+ to enter this site.`;
    }
}
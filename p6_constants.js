// const = a variable that can't be changed
// 常量建议用大写字母表示

// const PI = 3.14159;
// let radius;
// let circumference;

// // PI = 420.69; // error

// radius = window.prompt(`Enter the radius of a circle:`);
// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log(circumference);


const PI = 3.14159;

document.getElementById("mySubmit").onclick = function() {
    let radius = document.getElementById("myText").value;
    radius = Number(radius);
    let circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = `The circumference is ${circumference}cm.`;
}
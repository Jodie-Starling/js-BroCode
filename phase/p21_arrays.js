// array = a variable like structure that can hold
//         more than 1 value

let fruit = ["apple", "banana", "mango"];

/*
for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

for (let i = fruit.length - 1; i >= 0; i--){
    console.log(fruit[i]);
}
*/

for(let f of fruit){
    console.log(f);
}

fruit[0] = "orange";
fruit[3] = "grapes";

console.log(fruit);
console.log(fruit[0]);


fruit.push("kiwi"); // adds at the end
fruit.pop(); // removes from the end

console.log(fruit);


fruit.unshift("strawberry"); // adds at the beginning

console.log(fruit);


fruit.shift(); // removes from the beginning

console.log(fruit);


let numOfFruits = fruit.length;
let index = fruit.indexOf("banana");

console.log(numOfFruits);
console.log(index);
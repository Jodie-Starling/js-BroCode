// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring
//                 5 EXAMPLES


// SWAP 2 VARIABLES
let a = 5, b = 10;
console.log(`Before swap: a = ${a}, b = ${b}`);
[a, b] = [b, a]; // destructuring assignment
console.log(`After swap: a = ${a}, b = ${b}`);


// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ['red', 'green', 'blue'];
[colors[0], colors[2]] = [colors[2], colors[0]];

console.log(colors); // ['blue', 'green', 'red']


// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors2 = ['red', 'green', 'blue', 'yellow', 'purple'];
const [firstColor, secondColor, ...otherColors] = colors2; // rest parameter

console.log(firstColor); // 'red'
console.log(secondColor); // 'green'
console.log(otherColors); // ['blue', 'yellow', 'purple']


// EXTRACT VALUES FROM OBJECTS

const person = {
    name: 'John',
    age: 30,
    country: 'USA'
};

const {name, age, country} = person; // destructuring assignment
console.log(name); // 'John'
console.log(age); // 30
console.log(country); // 'USA'

const {name: name2, age: age2, country: country2} = person;
// 使用不同的变量名进行解构,前面的 name 是对象的属性，后面的 name2 是新的变量名
console.log(name2); // 'John'
console.log(age2); // 30
console.log(country2); // 'USA'

console.log(person.name); // 'John'


// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({name, age, country}) {  // 与属性数量有关，顺序无关，变量名也可以变
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Country: ${country}`);
}

/*

用上面的person对象调用函数
const person = {
    name: 'John',
    age: 30,
    country: 'USA'
};

*/

displayPerson(person);
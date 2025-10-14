// object = A collection of related properties and/or methods
//          Can represent ral world objects (people, products, places)
//          object = {key:value,
//                   function()}


const person1 = {
    firstName: `Kerr`,
    lastName: `Miranda`,
    age: 20,
    hobies: [`music`, `movies`, `sports`],
    isEmployed: true,
    sayHello: function() {
        console.log(`Hi, I'm ${this.firstName}!`);
    }
}

const person2 = {
    firstName: `John`,
    lastName: `Doe`,
    age: 30,
    hobies: [`cooking`, `traveling`],
    isEmployed: false,
    sayHello: () => {
        console.log(`Hi, I'm ${person2.firstName}!`);
    }
}


console.log(person1);
console.log(person1.age);
person1.sayHello();

console.log(person2);
console.log(person2.hobies[1]);                                                                                                                                                                                                                                                                                     
person2.sayHello();
// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

//        does NOT work with arrow function
//        person.name


const person1 = {
    name: `kerr`,
    age: 20,
    favFood: `peach`,
    greet: function() {
        console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`)
    },
    eat: function() {
        console.log(`${this.name} is eating ${this.favFood}.`)
    }
}

const person2 = {
    name: `Lily`,
    age: 24,
    favFood: `sushi`,
    greet: function() {
        console.log(`Hello, I'm ${this.name}, and I'm ${age} years old.`)
    },
    eat: () => {
        console.log(`${person2.name} is eating ${person2.favFood}.`)
    }
}

person1.greet();
person2.eat();
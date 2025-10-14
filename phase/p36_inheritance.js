// inheritance = allows a new class to inherit properties and methods
//               from an existing class (parent -> child)
//               helps to reuse code


class Animal {
    alive = true;

    eat() {
        console.log(`${this.name} is eating.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}

class Rabbit extends Animal {
   static name = 'rabbit';

   run() {
        console.log(`${this.name} is running.`);
   }
}

class Fish extends Animal {
    name = 'fish';

    swim() { // instance property
        console.log(`${this.name} is swimming.`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const dog = new Animal();

console.log(rabbit.name); // undefined because name is static
console.log(fish.name);  // fish, because name is instance property
console.log(dog);

rabbit.eat();
fish.sleep();
dog.eat();
rabbit.run();
fish.swim();
// dog.run(); // error
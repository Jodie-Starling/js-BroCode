// constructor = special method for defining the
//               properties and methods of objects


function Car (a, b, c, d){
    this.make = a;
    this.model = b;
    this.year = c;
    this.color = d;
    this.drive = function(){
        console.log(`You drive the ${this.model}.`);
    }
    console.log(`Generating a new car...`);  // runs every time a new object is created
}

const car1 = new Car(`Ford`, `Mustang`, 2024, `Red`);
const car2 = new Car(`Chevy`, `Camaro`, 2023, `Blue`);

console.log(car1);
console.log(car1.model);
console.log(car2);
console.log(car2.year);

car1.drive();
car2.drive();
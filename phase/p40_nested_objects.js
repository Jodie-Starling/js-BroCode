// nested objects = Object inside of other Objects.
//                  Allow youto represent more complex data structures
//                  Child Object is enclosed by the Parent object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keybord{}, Monitor{}, Mouse{}}


// Object
const person1 = {
    fullname: `Celeste April`,
    age: 30,
    isStudent: true,
    hobbies: [`cooking`,`jellyfishing`,`Karate`],
    address: {
        street: `124 Conch St.`,
        city: `New York`,
        country: `US`,
    }
}


for (const a in person1) {
    console.log(person1[a]);
}

for (const property in person1.address) {
   console.log(person1.address[property]);
}


// Class
class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person2 = new Person(`Spongebob Squarepants`, 20, `124 Conch St.`, `Bikini Bottom`, `Pacific Ocean`);
const person3 = new Person(`Patrick Star`, 20, `124 Conch St.`, `Bikini Bottom`, `Pacific Ocean`);
const person4 = new Person(`Squidward Tentacles`, 30, `124 Conch St.`, `Bikini Bottom`, `Pacific Ocean`);

console.log(person2);
console.log(person2.address.city);  
console.log(person2.address);
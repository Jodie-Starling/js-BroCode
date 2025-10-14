// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created
//          from that class (class owns anything static, not the objects)


class MathUtil {
    static PI = 3.14159;
    
    static getDiameter(radius) {
        return radius * 2;
    }

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(5));
console.log(MathUtil.getCircumference(5));

const mu = new MathUtil();
console.log(mu.PI);            // undefined


class User {
    static userCount = 0;

    static getUserCount() {
        return User.userCount;
    }

    constructor(name) {
        this.name = name;
        User.userCount++;
    }

    sayHello() {
        console.log(`Hello, I'm ${this.name}.`);
    }
}

const u1 = new User('Alice');
const u2 = new User('Bob');

u1.sayHello(); 

console.log(User.userCount);   // 2
console.log(User.getUserCount()); // 2
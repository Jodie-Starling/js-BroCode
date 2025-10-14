// super = keyword is used in classes to call the constructor or
//         access the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log(`${this.name} is moving at ${speed} km/h`);
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age); // 第一行
        this.runSpeed = runSpeed;
    }

    move() {
        console.log(`${this.name} is running`);
        super.move(this.runSpeed); // 调用父类的方法
    }
}

class Fish extends Animal {
    constructor(n, a, swimSpeed) {
        super(n, a); // 子类通过 super() 设置的属性名与父类构造函数中定义的一样，子类无法改变
            // 但传递的参数名可以不同，传递的参数必须与父类构造函数的参数顺序和数量匹配
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal {
    constructor(name, flySpeed, age) {  // 参数顺序可以不同
        super(name, age);
        this.flySpeed = flySpeed;
    }
}


const rabbit = new Rabbit("Thumper", 3, 45);
const fish = new Fish("Nemo", 1, 20);
const hawk = new Hawk("Hedwig", 80, 4);

console.log(rabbit);
console.log(fish);
console.log(hawk);

rabbit.move();
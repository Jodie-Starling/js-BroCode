// class = (ES6 feature) - provides a more structed and cleaner way to
//          work with objects compared to traditional constructor functions
//          ex. static keyword, encapsulation, inheritance


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    display() {
        console.log(`Product: ${this.name}, Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const product1 = new Product('Laptop', 999.99)
const product2 = new Product(`iPhone`, 7999)

product1.display(); 
product2.display();

const total = product1.calculateTotal(0.07);
console.log(`Total with tax: $${total.toFixed(2)}`);
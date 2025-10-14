// getter = specialmethod that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property


/*

get 和 set 关键字控制属性读取和写入

实现在访问或修改对象属性时执行自定义逻辑

*/


class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if(newWidth > 0) {
            this._width = newWidth; 
            // 必须有_ 
            // this._width 和 this._height 是内部存储的实际值。
            // width 和 height 是通过 getter 和 setter 访问的接口，是外部使用的属性名。
        } 
        else {
            console.log(`Width must be positive`);
        }
    }

    set height(newHeight) {
        if(newHeight > 0) {
            this._height = newHeight;
        } 
        else {
            console.log(`Height must be positive`);
        }
    }

    get width() {
        return `${this._width.toFixed(2)}cm`;
    }

    get height() {
        return this._height;
    }

    get area() { // get()定义只读属性
        return `${(this._width * this._height).toFixed(2)}cm²`;
    }
}

const rectangle = new Rectangle(4, 5);
const rectangle2 = new Rectangle(10, `pizza`);

rectangle.width = -100000; // Width must be positive
rectangle.height = `pizza`; // Height must be positive

console.log(rectangle.width); // 4
console.log(rectangle.height); // 5
console.log(rectangle.area); // 20

console.log(rectangle2.width);
console.log(rectangle2.height); // undefined 是js的一种原始类型
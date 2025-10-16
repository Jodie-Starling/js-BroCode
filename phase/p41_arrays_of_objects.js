
const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' },
    { name: 'orange', color: 'orange' },,
    { name: 'kiwi', color: 'brown' }
]

console.log(fruits[0].name)

fruits.push({ name: 'pear', color: 'green' })
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.forEach(fruit => {console.log(`This is ${fruit.name}.`)});
// 回调函数只有一个参数（如 fruit是参数），括号可以省略，多个或无参数时括号不能省略
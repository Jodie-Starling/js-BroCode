// .reduce() = redrce the elements of an array
//             to a single valuue


const prices =[5, 10, 15, 20, 25];
let total = prices.reduce(sum); // reduce 回调函数的参数位置是固定的：
            // (accumulator, currentValue, currentIndex, array)
console.log(`$${total}`);

function sum(accumulator, element){ // 参数名可以自定义
    return accumulator + element;
}


const grades = [87, 64, 96, 92, 88, 99];
const maxGrade = grades.reduce(getMax); // 0 是初始值, 不设置初始值时, 默认使用数组的第一个元素
console.log(maxGrade);

function getMax(preMax, element){
    return Math.max(preMax, element);
}
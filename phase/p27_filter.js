// .filter() = creates a new array by filtering
//             out elements


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumbers = numbers.filter(isEven); // 筛选true的元素
console.log(evenNumbers);
let oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);

function isEven(number) {
    return number % 2 === 0; // boolean
}

function isOdd(number) {
    return number % 2 !== 0; // boolean
}


const ages =[32, 33, 16, 40, 18, 47, 25, 19, 75, 80, 12, 6];
let adult = ages.filter(checkAdult);
console.log(adult);

function checkAdult(age) {
    return age >= 18;
}


const words = [`apple`, `orange`, `banana`, `kiki`, `pomegranate`, `coconut`];
let shortWords = words.filter(getShortWords);
console.log(shortWords);

function getShortWords(element){
    return element.length <= 6;
}
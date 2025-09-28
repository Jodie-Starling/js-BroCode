// Arithmetic Operators = operands (values, variables, etc.)
//                        operators ( +, -, *, /, % )
//                        ex, 11 = x + 5;

let students = 20;

students = students + 3;
students = students - 1;
students = students * 2;
students = students / 3;  // division
students = students ** 3;
let extrastudents = students % 3;  // remainder
                                // 声明变量并赋值

console.log(students);
console.log(extrastudents);

students += 3;
students -=1;
students *= 3;
students /= 3;
students **= 2;
students %= 3;

students++;
students--;

/*
    Order of operations:
    1: parentheses
    2: exponents
    3: multiplication & division & modulo (left to right)
    4: addition & subtraction (left to right)
*/
let result = (1 + 2) * 3 ** 2;  // 27
console.log(result);
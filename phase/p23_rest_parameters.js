// rest parameters = (...) allow a function works with a variable
//                    number of arguments by bundling them into an array

//                    spread = expands an array into separate elements
//                    rest = bundles separate elements into an array


function openFridge(...foods){
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}

const food1 = `pizza`;
const food2 = `burger`;
const food3 = `sushi`;
const food4 = `pasta`;

openFridge(food1, food2, food3, food4, `ice cream`, `salad`); // we can add as many as we want

const foods = getFood(food1, food2, food3, food4, `hot dog`);
console.log(foods);


function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

console.log(sum(1,2,3));

function getTheAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

console.log(getTheAverage(1,2,3,4,5,6,7,8,9,10));


function combineStrings(...strings){
    return strings.join(` `); //join是在`数组`中间加指定字符，返回字符串
}

/*
function combineStrings(...a){  // ...后面不要求必须是strings，可以是其他名字
    return a.join(` `); //join是在`数组`中间加指定字符，返回字符串
}
*/

const sentence1 = combineStrings(`John`, `Doe`, `is`, `a`, `good`, `guy.`);
console.log(sentence1);
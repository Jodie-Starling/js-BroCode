// forEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element


//             array.forEach(callback)
//             element, index, array are provided


numbers = [1, 2, 3, 4, 5]

function display(element){
    console.log(element);
}

numbers.forEach(display);

function double(element, index, array) {  //在 forEach 的回调函数中，
                    // 参数顺序是固定的：(element, index, array)。
                    // 不能随意交换位置，因为 forEach 总是按这个顺序传递值
                    // callback 的参数名可以换，因为它只是个接受forEach传值的变量
    array[index] = element * 2;
}

numbers.forEach(double);
numbers.forEach(display);


fruits = [`apple`,`orange`,`banana`,`coconut`];

function display2(element, index){
    console.log(`${index}: ${element}`);
}

fruits.forEach(display2);

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase()+element.slice(1);
}

fruits.forEach(capitalize);
fruits.forEach(display2);
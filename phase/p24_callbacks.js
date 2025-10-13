// callback = a function that is passed as an argument
//            to another function

//            used to handle asynchronous operations:
//            1. Reading a file
//            2. Network requests
//            3. Interacting with databases

//            "Hey, when you're done, call this next."


/*
function hello(){
    console.log(`hello`);
}
function goodbye(){
    console.log(`goodbye`);
}

hello();
goodbye();
*/

function hello(callback1,callback2){
    console.log(`hello`);
    callback1();
    callback2();
}
function wait(){
    console.log(`waiting...`);
}
function goodbye(){
    console.log(`goodbye`);
}

hello(wait,goodbye);

function sum(callback, x, y){
    const result = x + y;
    callback(result);
}
function display(result){
    console.log(`The result is ${result}.`);
}

sum(display, 3, 5);
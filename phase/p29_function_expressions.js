// function declaration = define a reusable block of code
//                        that performs a specific task

/*
function hello() {
    console.log(`hello`)
}

hello()
*/


// function expression = a way to define a function as
//                       values or variables

// 1. Callbacks in asynchronous operations
// 2. Higher-Order Functions
// 3. Closures
// 4. Event Listeners


const hello = function(){
    console.log(`hello`)
}
hello();


setTimeout(hello, 3000);

setTimeout(function(){
    console.log(`goodbye`);
}, 2000);
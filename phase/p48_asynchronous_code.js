// synchronous code = Excutes line by line consecyticely in a sequential manner
//                    Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be3 performed concurrently without waiting
//                Doesn't block the execution flow and allows the program to continue
//                (I/O operations, timers, network requests, user interactions, fetch data)
//                Handled with: Callbacks, Promises, Async/Await


setTimeout(function() {
    console.log(`Task 3 (after 2 seconds)`);
}, 2000);

console.log(`Task 1`);
console.log(`Task 2`);


function func1(callback){
    console.log(`task 1 started`);
    callback();
}

function func2(){
    console.log(`task 2 executed after task 1`);
    console.log(`task 3 executed after task 2`);
    console.log(`task 4 executed after task 3`);
}

func1(func2);
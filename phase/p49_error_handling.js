// Error = An Object that is created to represent a problem that occurs
//         Occur often with user input or establishing a connection
//         Can be handled using try-catch blocks, error callbacks, or error events

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//               ex. close files, close connections, release resources


try{
    console.lag(`Hello World!`);
}
catch(error){
    console.log(error);
}
finally{
    console.log(`Execution completed.`);    
}


try{
    const dividend = window.prompt("Enter the dividend:");
    const divisor = window.prompt("Enter the divisor:");
    
    if(divisor == 0){
        throw new Error("Division by zero is not allowed.");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Both dividend and divisor must be valid numbers.");
    }
// try 块中，一次运行只能抛出一个错误（throw 会中断执行）。如果条件不满足，继续执行。
  
    const result = dividend / divisor;
    console.log(`Result: ${result}`);
}
catch(error){
    console.log(error);
}
finally{
    console.log(`Execution completed.`);
}
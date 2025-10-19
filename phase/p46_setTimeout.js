// setTimeout = function in JavaScript that allows you to schedule
//              the execution of a function after an amount of time(milliseconds)
//              Times are approximate (varies based on the workload of the JavaScript engine)

//              setTimeout(callback, delay);


const timeout = setTimeout(function() {window.alert(`Hello`)},3000);
clearTimeout(timeout); // cancels the timeout before it executes

let timeoutId;

function startTimer() {
    timeoutId = setTimeout(function() {
        window.alert(`Hello after 3 seconds`)
    }, 3000);
    console.log('Timer started');
}

function clearTimer() {
    clearTimeout(timeoutId);
    console.log('Timer cleared');
}
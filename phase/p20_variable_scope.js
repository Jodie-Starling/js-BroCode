// variable scope = where a variable is recognized
//                  and accessible (local vs global)

/*
global scope

let x = 1;
let x = 2; // name conflict error
*/

x = 1; // global scope
y = 5;


function1();
function2();
function3();

function function1() {
    let x = 1; // local scope
    console.log(x);
}

function function2() {
    let x = 2;
    console.log(x);
}

function function3(){
    console.log(y);
}
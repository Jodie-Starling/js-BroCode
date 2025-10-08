// logical operators = used to combine or manipulate boolean values
//                     (true or false)

//                     AND = &&
//                     OR  = ||
//                     NOT = !

const temp = 35;

if(temp > 0 && temp <= 30){
    console.log(`The weather is GOOD`);
}
else if(temp < 0 || temp > 30){
    console.log(`The weather is BAD`);
}

const isSunny = true;

if(!isSunny){
    console.log(`It is NOT sunny.`);
}
else{
    console.log(`It is sunny.`);
}
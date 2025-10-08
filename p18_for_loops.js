// for loop = repeat some code a LIMITED amount of times

for(let i = 0; i <= 10; i+=2){
  console.log(i);
}

console.log(`Happy New Year!`);



for(let i = 1; i <= 20; i++){
    if(i == 13){
        continue;
        //break;
    }
    //else{
        console.log(i);
    //}  建议不写else，不是必需的，简化代码
}
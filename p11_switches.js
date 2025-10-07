// SWITCH = can be cient to many else if statements
// switch 的运行机制像坐公交车，从某一站上车，只要不下车就一直坐到终点站；如果不从站点上车，就从可能任意位置的默认站点（也可能没有）上车，一直做下去。
// switch 会从上到下匹配 case；
// 一旦匹配成功，就从那一行开始执行，直到遇到 break、return、throw 或代码块结束；
// 如果没有匹配任何 case，就执行 default（若存在）。
// 从 default 那一行开始执行，直到遇到 break、return、throw 或代码块结束；


let day1 = `3`;

switch(day1){
    case 1:
        console.log(`Today is Monday`);
        break;
    case 2:
        console.log(`Today is Tuesday`);
        break;
    case 3:
        console.log(`Today is Wednesday`);
        break;
    case 4:
        console.log(`Today is Thursday`);
        break;
    case 5:
        console.log(`Today is Friday`);
        break;
    case 6:
        console.log(`Today is Saturday`);
        break;
    case 7:
        console.log(`Today is Sunday`);
        break;
    default:  // 默认执行
        console.log(`${day1} is not a valid day!`);
}

// 没有 break 的情况
let day2 = 5;

switch(day2){
    case 1:
        console.log(`Today is Monday`);
    case 2:
        console.log(`Today is Tuesday`);
    case 3:
        console.log(`Today is Wednesday`);
    case 4:
        console.log(`Today is Thursday`);
    default: // 默认执行
        console.log(`${day2} is not a valid day!`);
    case 5:
        console.log(`Today is Friday`);
    case 6:
        console.log(`Today is Saturday`);
    case 7:
        console.log(`Today is Sunday`);
}


let testScore = 60;
let letterGrade;
switch(true){
    case testScore >= 90:
        letterGrade = 'A';
        break;
    case testScore >= 80:
        letterGrade = 'B';
        break;
    case testScore >= 70:
        letterGrade = 'C';
        break;
    case testScore >= 60:
        letterGrade = 'D';
        break;
    default:
        letterGrade = 'F';
        break;
}
console.log(`Your grade is ${letterGrade}`);
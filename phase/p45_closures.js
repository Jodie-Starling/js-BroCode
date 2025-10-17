// closure = A function defined inside of another function,
//           the inner function has acess to the variables
//           and scope of the outer function.
//           Allow for private vaiables and state maintenance
//           Used frequently in JS frameworks: React, Vue, Angular


function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log('Current count:', count);
        return count;
    }

    function getCount() {
        return count;
    }

    return { increment, getCount };
}
// 闭包（closure） 允许内部函数访问和修改外部函数的变量

const counter = createCounter();

// counter 是 createCounter() 返回的对象 { increment, getCount }
// 不是函数本身，因此不能直接调用 counter()
counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount());



function createScoreManager() {
let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}`);
    }

    function getPoints() {
        return score;
    }

    return { increaseScore, decreaseScore, getPoints };
}

const game = createScoreManager();

game.increaseScore(5);
game.decreaseScore(2);
console.log('Total Score:', game.getPoints());


/*
没有使用闭包的代码示例：
同样可以修改 score ，但无法保持 score 变量的私有性。

let score = 0;

function increaseScore(points) {
    score += points;
    console.log(`+${points}`);
}

function decreaseScore(points) {
    score -= points;
    console.log(`-${points}`);
}

function getPoints() {
    return score;
}
increaseScore(5);
decreaseScore(2);
console.log('Total Score:', getPoints());

*/
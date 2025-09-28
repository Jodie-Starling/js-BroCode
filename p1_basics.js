/*
在html文件里，用<script src='index.js'></script>标签引入js文件;
1. 放在<head>中，页面加载时会加载js，可能会阻塞页面渲染
2. 放在<body>结束前，页面内容先加载，用户体验更好
3. 使用defer属性，异步加载js文件，不阻塞页面渲染
*/


console.log(`hello world`);  // 在控制台打印一行文本，常用于调试
console.log(`I like pie`)

window.alert('This is an alert!')   //  弹出一个警告框
window.alert('I like pizza!')

//This is a comment

/* This
    is
    a
    comment
*/

document.getElementById('date').textContent = `Hello`;
document.getElementById('weather').textContent = `rainy`;  // 修改页面内容

/*  
在js中，分号（;）是可选的，
因为引擎会自动插入分号（ASI）。

但有些情况省略会出错，比如return后换行。
*/
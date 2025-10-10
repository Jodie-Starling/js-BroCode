// Math = built-in object that provides a
//        collection of properties and methods
//        全局对象，类似py的模块，但不用导入，全局可用


let x = 3.21;
let y = 2;
let z = 1;

z = Math.round(x); // 四舍五入
z = Math.floor(x); // 向下取整
z = Math.ceil(x);  // 向上取整
z = Math.trunc(x); // 去掉小数部分

z = Math.pow(x, y);
z = Math.sqrt(16);

z = Math.log(x); // 自然对数,e为底
z = Math.log10(x); // 10为底

z = Math.sin(x);
z = Math.cos(x);
z = Math.tan(x);

z = Math.abs(x);

z = Math.sign(x); // 正数返回1，负数返回-1，0返回0

z = Math.min(x, y, z);
z = Math.max(x, y, z);


console.log(z);
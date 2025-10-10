// String Methods = allow you to manipulate and work with text (strings)

let userName = `Jodie`;

console.log(userName.charAt(5)); // 不存在就返回空字符串``，不抛出错误
console.log(userName.indexOf('o'));  // 返回第一次出现的位置，不存在就返回 -1
console.log(userName.lastIndexOf('o')); // 返回最后一次出现的位置, 不存在就返回 -1

console.log(userName.length); // 字符串长度

console.log(userName.trim());  // 去掉前后空格,不影响中间空格


console.log(userName.toUpperCase()); // 转大写
console.log(userName.toLowerCase()); // 转小写

console.log(userName.repeat(3));  // 重复字符串 n 次

console.log(userName.startsWith('J')); // 是否以某个字符串开头,返回布尔值
console.log(userName.endsWith('e')); // 是否以某个字符串结尾,返回布尔值
console.log(userName.includes('Jo')); // 是否包含某个字符串,返回布尔值

let phoneNumber = `123-456-789`;

console.log(phoneNumber.replace('-', '/')); // 替换字符串,只替换第一个
console.log(phoneNumber.replaceAll(`-`,`/`)); // 替换所有匹配的字符串

console.log(phoneNumber.padStart(15,`0`));  // 在字符串前面补齐到指定长度,用指定字符补齐
console.log(phoneNumber.padEnd(15,`0`));  // 在字符串后面补齐到指定长度,用指定字符补齐
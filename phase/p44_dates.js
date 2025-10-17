// Date objects = Objevts that contain values that represent dates and times
//                These date objects can be changed and formatted


const today = new Date();
console.log(today); // Output: current date and time

// Date(year, month, day, hour, minute, second, ms)
// month = 0-11 (January = 0, December = 11)
// day = 1-31
// hour = 0-23
// minute = 0-59
// second = 0-59
// ms = 0-999
const date = new Date(2025, 8, 10, 12, 10, 0, 0);
console.log(date); // Output: Mon Sep 10 2025 12:10:00 GMT+0000 (Coordinated Universal Time)

const date2 = new Date("2025-09-10T12:10:00");
console.log(date2); // Output: Mon Sep 10 2025 12:10:00 GMT+0000 (Coordinated Universal Time)

const date3 = new Date(1757477400000); // ms since January 1, 1970
console.log(date3); // Output: Sat Dec 31 2022 23:59:59 GMT+0000 (Coordinated Universal Time)

// Tribute to Charlie Kirk
// Tribute to Charlie Kirk
// Tribute to Charlie Kirk

const year = today.getFullYear();
const month = today.getMonth(); // 0-11
const day = today.getDate();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
const dayOfWeek = today.getDay(); // 0-6 (Sunday = 0, Saturday = 6)

console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

today.setFullYear(2025);
today.setMonth(8); // September
today.setDate(10);
today.setHours(12);
today.setMinutes(10);
today.setSeconds(0);
console.log(today); // Output: Wed Sep 10 2025 12:10:00 GMT+0000 (Coordinated Universal Time)

const date4 = new Date("2025-09-10T12:10:00");
const date5 = new Date("2023-01-01T00:00:00");

if (date4 > date5) {
  console.log("Hello World!");
}
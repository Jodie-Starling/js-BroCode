// ES6 module = An external file that contains reusable code
//              that can be imported into other JavaSctipt files.
//              Write resusable coe for many different app.
//              Can contain variables, classes, functons ... and more
//              Introduced as part of EXMAScript 2015 update


import {PI, getCircumference, getArea, getVolume} from "./p47_MathUtil.js";

console.log("PI: " + PI);

const circumference = getCircumference(10);
console.log(`Circumference of circle with radius 10: ${circumference.toFixed(2)}cm`);

const area = getArea(10);
console.log(`Area of circle with radius 10: ${area.toFixed(2)}cm²`);

const volume = getVolume(10);
console.log(`Volume of sphere with radius 10: ${volume.toFixed(2)}cm³`);
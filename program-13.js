"use strict";
// 13. Write a program to swap two numbers without using third variable.
console.log("--------- Swapping without Third Variable --------");
let num1 = 35;
let num2 = 89;
console.log();
console.log(`Before Swapping   :   A = ${num1}  B = ${num2}`);
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
console.log();
console.log(`After Swapping    :   A = ${num1}  B = ${num2}`);
console.log();
console.log("--------------------------------------------------");

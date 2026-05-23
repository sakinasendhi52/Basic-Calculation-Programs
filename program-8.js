"use strict";
// 8.Write a program to convert string "250" into number and add 50.
let str = "250"; //variable in string datatype
console.log(`Before Conversion :`);
console.log(`Type of ${str} is ${typeof (str)}`);
let num = Number(str); //conversion into number datatype
console.log();
console.log(`After Conversion :`);
console.log(`Type of ${num} is ${typeof (num)}`);
console.log(`Addtion of ${num} with 50 is ${num + 50}`);

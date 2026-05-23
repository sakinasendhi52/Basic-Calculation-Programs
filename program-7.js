"use strict";
// 7. Write a program to declare one variable using any type and assign different values one by one.
let variable; //declare using any type
console.log(`------------- ANY TYPE VALUES -------------`);
console.log(`Type of ${variable} is ${typeof (variable)}`);
variable = "Hello World!"; //assign string value
console.log(`Type of ${variable} is ${typeof (variable)}`);
variable = 10; //assign number value    
console.log(`Type of ${variable} is ${typeof (variable)}`);
variable = ["Mango", "Apple", "Kiwi"]; //assign array value
console.log(`Type of ${variable} is ${typeof (variable)}`);
variable = ["PI", 3.14]; //assign tuple value
console.log(`Type of ${variable} is ${typeof (variable)}`);
variable = true; //assign boolean value
console.log(`Type of ${variable} is ${typeof (variable)}`);
variable = null; //assign null value
console.log(`Type of ${variable} is ${typeof (variable)}`);
console.log(`--------------------------------------------`);

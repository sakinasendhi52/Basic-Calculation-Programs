// 13. Write a program to swap two numbers without using third variable.

console.log("--------- Swapping without Third Variable --------");
let num1:number=35;               //variable in number datatype
let num2:number=89;               //variable in number datatype

console.log();
console.log(`Before Swapping   :   A = ${num1}  B = ${num2}`);   //display numbers

//swapping method
num1=num1+num2;
num2=num1-num2;
num1=num1-num2;

console.log();
console.log(`After Swapping    :   A = ${num1}  B = ${num2}`);   //display numbers
console.log();
console.log("--------------------------------------------------");
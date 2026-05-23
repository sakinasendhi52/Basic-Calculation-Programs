// 12. Write a program to swap two numbers using third variable.

console.log("---------- Swapping Using Third Variable ----------");
let num1:number=10;               //variable in number datatype
let num2:number=20;               //variable in number datatype
let temp:number;                  //temporary third variable

console.log();
console.log(`Before Swapping   :   A = ${num1}  B = ${num2}`);       //dislplay numbers
console.log();

//swapping
temp=num1;
num1=num2;
num2=temp;

console.log(`After Swapping    :   A = ${num1}  B = ${num2}`);       //dislplay numbers
console.log();
console.log("--------------------------------------------------");
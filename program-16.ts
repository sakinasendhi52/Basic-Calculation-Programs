/* 16. Write a program to calculate employee total salary using:
   a. Basic salary
   b. HRA = 10%
   c. DA = 5%
*/

console.log("---------------- Salary Calculator ----------------");
let basicSal:number=50000;          //basic salary in number datatype
let HRA:number=basicSal*0.1;           //HRA in number datatype, 10% = 0.1
let DA:number=basicSal*0.05;           //DA in number datatype, 5% = 0.05
let totalSal:number=basicSal+HRA+DA;     //total salary in number datatype

console.log();
console.log(`Basic Salary  =  ${basicSal} Rs`);         //display basic salary
console.log(`House Rent Allowance  =  ${HRA} Rs`);         //display HRA
console.log(`Dearness Allowance   =  ${DA} Rs`);         //display DA
console.log();
console.log(`Total Salary  =  ${totalSal} Rs`);         //display total salary

console.log();
console.log("---------------------------------------------------");
"use strict";
/* 16. Write a program to calculate employee total salary using:
   a. Basic salary
   b. HRA = 10%
   c. DA = 5%
*/
console.log("---------------- Salary Calculator ----------------");
let basicSal = 50000;
let HRA = basicSal * 0.1; // 10% = 0.1
let DA = basicSal * 0.05; // 5% = 0.05
let totalSal = basicSal + HRA + DA;
console.log();
console.log(`Basic Salary  =  ${basicSal} Rs`);
console.log(`House Rent Allowance  =  ${HRA} Rs`);
console.log(`Dearness Allowance   =  ${DA} Rs`);
console.log();
console.log(`Total Salary  =  ${totalSal} Rs`);
console.log();
console.log("---------------------------------------------------");

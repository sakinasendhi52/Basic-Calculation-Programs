"use strict";
/* 15. Write a program to calculate electricity bill:
   A. up to 100 units = ₹5 per unit
   B. above 100 units = ₹8 per unit
*/
console.log("---------------- Electricity Bill ----------------");
let units = 140;
let bill;
if (units <= 100) {
    bill = units * 5;
}
else {
    bill = (100 * 5) + ((units - 100) * 8);
}
console.log();
console.log(`Bill Amount is ${bill} Rs for ${units} units.`);
console.log();
console.log("--------------------------------------------------");

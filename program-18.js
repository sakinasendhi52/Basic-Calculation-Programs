"use strict";
/* 18. Write a program to calculate discount:
   A. purchase above ₹5000 = 15% discount
   B. otherwise 5% discount
*/
console.log("--------------- Discount Calculator ---------------");
let purchase = 7000;
let discount;
if (purchase > 5000) {
    discount = purchase * 0.15; // 15% = 0.15
}
else {
    discount = purchase * 0.05; // 5% = 0.05
}
let finalAmount = purchase - discount;
console.log();
console.log(` Purchase Amount  =  ${purchase} RS`);
console.log(` Discount Amount  =  ${discount} RS`);
console.log();
console.log(` Final Amount     =  ${finalAmount} RS`);
console.log();
console.log("---------------------------------------------------");

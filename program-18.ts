/* 18. Write a program to calculate discount:
   A. purchase above ₹5000 = 15% discount
   B. otherwise 5% discount
*/

console.log("--------------- Discount Calculator ---------------");
let purchase:number=7000;           //purchase in number datatype
let discount:number;                //discount in number datatype

if(purchase>5000){               //condition for purchase above ₹5000
    discount=purchase*0.15;            //15% = 0.15
}
else{                    //condition for purchase ₹5000 or below
    discount=purchase*0.05;           //5% = 0.05
}

let finalAmount:number=purchase-discount;       //calculate final amount

console.log();
console.log(` Purchase Amount  =  ${purchase} RS`);      //display purchase amount
console.log(` Discount Amount  =  ${discount} RS`);      //display discount amount
console.log();
console.log(` Final Amount     =  ${finalAmount} RS`);   //display final amount
console.log();
console.log("---------------------------------------------------");
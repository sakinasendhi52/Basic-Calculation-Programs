/* 15. Write a program to calculate electricity bill:
   A. up to 100 units = ₹5 per unit
   B. above 100 units = ₹8 per unit
*/

console.log("---------------- Electricity Bill ----------------");
let units:number=140;              //units in number datatype
let bill:number;                   //bill in number datatype

if(units<=100){         //condition for upto 100 units
    bill=units*5;
}
else{                 //condition for above 100 units
    bill=(100*5)+((units-100)*8);
}

console.log();
console.log(`Bill Amount is ${bill} Rs for ${units} units.`);       //display bill amount
console.log();
console.log("--------------------------------------------------");
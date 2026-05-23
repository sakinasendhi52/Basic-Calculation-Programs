//  17. Write a program to check whether a person is eligible for voting

console.log("-------------------- Vote Eligibility --------------------");
console.log();
let age:number=35;             //age in number datatype

if(age>=18){                   //condition for 18 or above age
    console.log(`You are Eligible for voting as you are ${age} years old.`);
}
else{                         //condition for below 18 age
    console.log(`You are not Eligible for voting as you are ${age} years old.`);
}
console.log();
console.log("----------------------------------------------------------");
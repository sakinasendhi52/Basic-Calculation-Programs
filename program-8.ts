// 8.Write a program to convert string "250" into number and add 50.

let str:string="250";            //variable in string datatype

console.log(`Before Conversion :`);
console.log(`Type of ${str} is ${typeof(str)}`);      //display the type

let num:number=Number(str);      //conversion into number datatype

console.log();
console.log(`After Conversion :`);
console.log(`Type of ${num} is ${typeof(num)}`);          //display the type
console.log(`Addtion of ${num} with 50 is ${num+50}`);       //add 50 to the number 
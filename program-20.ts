// 20. Write a program to convert minutes into hours and minutes.

let minutes:number=75;                        //minutes in number datatype

let hours:number=Math.floor(minutes/60);      //hours in number datatype and calculation
let mins:number=minutes%60;                   //mins is the remaining minutes left after converting into hour

console.log("---------- Convert Minutes into Hours & Minutes ----------");
console.log();
console.log(`Minutes = ${minutes} mins`);          //total minutes display
console.log();
console.log(`Hours and Minutes = ${hours} hours ${mins} mins`);       //display after converting minutes into hours and minutes
console.log();
console.log("----------------------------------------------------------");
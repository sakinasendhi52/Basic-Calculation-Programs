/* 14. Write a program to check student grade based on marks:
   A. 80 and above = A
   B. 60 to 79 = B
   C. below 60 = C
*/

console.log("-------------------- Grade Calculator --------------------");
console.log();

let marks:number=98;           //variable in number datatype

if(marks>=80){                 //condition for A grade
    console.log(`Your grade for ${marks}% is A`);
}
else if(marks>=60){            //condition for B grade
    console.log(`Your grade for ${marks}% is B`);
}
else{                          //condition for C grade
    console.log(`Your grade for ${marks}% is C`);
}

console.log();
console.log("----------------------------------------------------------");
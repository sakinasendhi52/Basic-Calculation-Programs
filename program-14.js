"use strict";
/* Write a program to check student grade based on marks:
   A. 80 and above = A
   B. 60 to 79 = B
   C. below 60 = C
*/
console.log("-------------------- Grade Calculator --------------------");
console.log();
let marks = 98;
if (marks >= 80) {
    console.log(`Your grade for ${marks}% is A`);
}
else if (marks >= 60) {
    console.log(`Your grade for ${marks}% is B`);
}
else {
    console.log(`Your grade for ${marks}% is C`);
}
console.log();
console.log("----------------------------------------------------------");

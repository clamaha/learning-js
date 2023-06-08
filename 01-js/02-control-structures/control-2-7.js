const readlineSync = require("readline-sync");

let n = readlineSync.questionInt('Please enter a number:');
let i;
let sum = 0;
for(i=0;i!=n;i++){
    let number = readlineSync.questionInt("Enter a number");
    sum = sum + number;
}
console.log("Your sum is", sum)


const readlineSync = require("readline-sync");

let a = readlineSync.questionInt("Please enter a positive number:")

function factorial(a){
    let num = 1;
    for (i = 1; i <= a; i++) {
        num = num * i;
    }
    return num;
}
    console.log(" The factorial of " + a + " is " + factorial(a));

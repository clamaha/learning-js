const readlineSync = require("readline-sync");

let a = readlineSync.question('Give me a decimal number');
let b = readlineSync.question('Give me another decimal number');
console.log(Math.trunc(a)*b);
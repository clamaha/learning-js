const readlineSync = require("readline-sync");

let a = readlineSync.question('Give me a integer number');
let b = readlineSync.question('Give me another integer number');
console.log(a%b);

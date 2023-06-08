const readlineSync = require("readline-sync");

let userName = readlineSync.question("What is your first name?");
console.log("Hello" + userName);
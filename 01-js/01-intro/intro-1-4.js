const readlineSync = require("readline-sync");

let surName = readlineSync.question('What is your first name?');
let lastName = readlineSync.question('What is your last name?');
let cityName = readlineSync.question('Which city do you live in?');
console.log("Your name is", surName, lastName, "and you live in", cityName);
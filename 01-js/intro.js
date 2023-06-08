const readlineSync = require("readline-sync");

//1.1
console.log("hello, is it me you're looking for?")

//1.2
let name = "Lambert";
let firstName = "Gerard";
let city = "Paris";
console.log("Your name is", firstName, name, "and you live in", city);

//1.3
let userName = readlineSync.question("What is your first name?");
console.log("Hello" + userName);

//1.4
let surName = readlineSync.question('What is your first name?');
let lastName = readlineSync.question('What is your last name?');
let cityName = readlineSync.question('Which city do you live in?');
console.log("Your name is", surName, lastName, "and you live in", cityName);

//1.5
//1.6
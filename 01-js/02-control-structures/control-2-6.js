const readlineSync = require("readline-sync");

let number = readlineSync.question('Please enter a number between 1 and 7 :');

switch (number) {
  case "1":
    console.log("Monday, it's just another morning");
    break;
  case "2":
    console.log("Tuesday, I only feel like living");
    break;
  case "3":
    console.log("Wednesday");
    break;
  case "4":
    console.log("Thursday");
    break;
  case "5":
    console.log("Friday");
    break;
  case "6":
    console.log("Saturday");
    break;
  case "7":
    console.log("Sunday");
    break;
  default:
    console.log("This number is not between 1 and 7");
}
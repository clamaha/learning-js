const readlineSync = require("readline-sync");

let minAge = readlineSync.question('Enter a minimum number:');
let maxAge = readlineSync.question('Enter a maximum number:');
let currentAge = readlineSync.question('Enter a number between the two numbers you just give:');

if (minAge > maxAge){
  console.log("Can you even count?");
}
else if ((currentAge >= minAge) && (currentAge <= maxAge)){
    console.log("Good job!")
}
else{
    console.log("Not working")
}
const readlineSync = require("readline-sync");

  let favoriteNumber;

  while (true) {
    favoriteNumber = readlineSync.question('What is your favorite number? ');
    
    if (favoriteNumber == 42) {
      console.log("42 is so cool!");
      break;
    } else {
      console.log("Are you sure? Please try again.");
    }
  }
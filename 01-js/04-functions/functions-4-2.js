
function rand10() {
    let min = 1;
    let max = 10;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
  }
    let num= rand10();
    
console.log("Here's a random number between 1 and 10: " + num);

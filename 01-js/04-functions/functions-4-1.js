const readlineSync = require("readline-sync");

function calcSurface(length, width) {
    let surface = length * width;
    return surface;
  }
let length = readlineSync.questionInt("Please enter the lenght of the rectangle:");
let width = readlineSync.questionInt("Please enter the width of the rectangle:");;
let surface = calcSurface(length, width);

console.log("The surface of the rectangle is: " + surface);
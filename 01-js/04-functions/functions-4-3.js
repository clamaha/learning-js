const readlineSync = require("readline-sync");

function rand10() {
    return Math.floor(Math.random() * 10)+ 1;
  }

let num = readlineSync.question('Please enter a number:');

function multiRand(n){
    let arr = [];
    for(i = 0 ; i < n ; i ++){
        arr[i] = rand10() ; 
    }
    return arr;
}
console.log(multiRand (num));
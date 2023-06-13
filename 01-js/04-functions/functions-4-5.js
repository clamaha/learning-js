
let a1 = 1;
let a2 = 1;
let b1 = 3;
let b2 = 1;

function calcDistance(a1,a2,b1,b2){
    return Math.sqrt((a1 - a2)**2 + (b1 - b2)**2);
}
console.log(calcDistance(a1,a2,b1,b2));
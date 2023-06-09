
//first average
let array = [1, 2, 3, 4, 5];

function average(array) {
    let total = 0;
    let count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

console.log(average(array));

//second average
let arr = [100,101,102];

function average(arr) {
    let total = 0;
    let count = 0;

    arr.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

console.log(average(arr));

const readlineSync = require("readline-sync");

function askTvSerie(){
    const userAnswer = [
    {serie : readlineSync.question("Please enter the name of your favorite TV serie:")},
    {year : readlineSync.questionInt("Please enter the production year of this TV serie:")},
    {cast : readlineSync.question("Please enter 4 cast members of this TV serie (separated by commas):")},
    ]
    return{
        userAnswer
    }
}

console.log(askTvSerie());

const readlineSync = require("readline-sync");

function askTvSerie(){
    const userAnswer =[
    {serie : readlineSync.question("Please enter the name of your favorite TV serie:")},
    {year : readlineSync.questionInt("Please enter the production year of this TV serie:")},
    {cast : readlineSync.question("Please enter the name of cast members of this TV serie (separated by commas):")},
    ]
    return userAnswer;
    }

function randomizeCast(tvSerie) {
    for (i = tvSerie.length-1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
            [tvSerie[i], tvSerie[j]] = [tvSerie[j], tvSerie[i]];
     }
     return tvSerie;
    }

const answers = askTvSerie();
const randomAnswers = randomizeCast(answers);
console.log("Random cast:" + randomAnswers);
const read = require("readline-sync");

const currentAge = read.question("What is your age? ");
const retirementAge = read.question("At what age would you like to retire? ");
const currentYear = new Date().getFullYear();
const yearsLeftToRetirement = retirementAge - currentAge;
const retirementYear = currentYear + yearsLeftToRetirement;


console.log(`\nIt's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsLeftToRetirement} years of work to go!`);
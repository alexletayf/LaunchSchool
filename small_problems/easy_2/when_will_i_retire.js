const read = require('readline-sync');

let age = read.question('What is your age?\n');
age = Number(age);

let retirementAge = read.question('At what age would you like to retire?\n');
retirementAge = Number(retirementAge);

let retirementYears = age - retirementAge;

let currentYear = 2023;

let retirermentYear = currentYear + retirementYears;

console.log(`It's ${currentYear}. You will retire in ${retirermentYear}.`);
console.log(`You have only ${retirementYears} years of work to go!`);


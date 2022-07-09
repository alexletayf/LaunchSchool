const read = require('readline-sync');

let loanAmount = read.question("What's your loan amount?\n");
let annualPorcentageRate = read.question("What's your APR?\n");
let months = read.question("Desired # of months?\n");
let monthlyRate = annualPorcentageRate / 12;

let monthlyPayment = loanAmount * (monthlyRate / /*...*/
  (1 - Math.pow((1 + monthlyRate), (-months))));

console.log(monthlyPayment);


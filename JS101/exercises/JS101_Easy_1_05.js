let rlSync = require('readline-sync');

//Ask for bill amount
let amount = rlSync.question('What is the bill\'s amount? ');
amount = parseFloat(amount);

let percentage = rlSync.question('What is the desired tip\'s percentage? ');
percentage = parseFloat(percentage);

let tip = amount * percentage / 100;
let total = amount + tip;

console.log(`The tip is $${tip.toFixed(2)}. \nThe total is $${total.toFixed(2)}.`);
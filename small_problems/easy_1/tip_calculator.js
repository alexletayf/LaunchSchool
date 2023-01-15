const read = require('readline-sync');

let bill = parseFloat(read.question('What is the bill?\n'));
let tipPercentage = parseFloat(read.question('What is the tip percentage?\n'));

let tip = bill * (tipPercentage / 100);
let total = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
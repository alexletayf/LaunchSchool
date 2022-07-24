let rlSync = require('readline-sync');
let arr = [1, 2, 3, 4, 5]
let answer = [];
let operation = '';

//Dialog with the user
let operator = rlSync.question(`Enter "s" to compute the sum, or "p" to compute the product. `);

//
if (operator === "s") {
	answer = arr.reduce((prev, curr) => prev + curr, 0);
	operation = 'sum';
} else if (operator === "p") {
	answer = arr.reduce((prev, curr) => prev * curr, 1);
	operation = 'product';
}

console.log(answer);

//Final statement
console.log(`The ${operation} of the integers between 1 and 5 is ${answer}.`)



let rlSync = require('readline-sync');

//Dialog with the user
let num = rlSync.question(`Please enter an integer greater than 0: `);
let operator = rlSync.question(`Enter "s" to compute the sum, or "p" to compute the product. `);

let answer = 0;
if (operator === "s") {
	answer = rangeSum(num);
} else if (operator === "p") {
	answer = rangeMultiply(num);
}

if (operator === 's') {
	console.log(`The sum of the integers between 1 and ${num} is ${answer}.`)
} else if (operator === 'p') {
	console.log(`The product of the integers between 1 and ${num} is ${answer}.`)
}

//Function expressions are hoisted
function rangeSum(arg) {
	let total = 0;
	for (let i = 1; i <= arg; i++) {
		total = total + i;
	}
	return total;
}

function rangeMultiply(arg) {
	let total = 1;
	for (let i = 1; i <= arg; i++) {
		total = total * i;
	}
	return total;
}
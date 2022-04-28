let rlSync = require('readline-sync');

let name = rlSync.question('What is your name? ');

if (name.charAt(name.length - 1) !== '!') {
	name.slice(0, -1);
	console.log(`Hello ${name}.`);
} else {
	console.log(`HELLO ${name.toUpperCase()} WHY ARE WE SCREAMING?`);
}
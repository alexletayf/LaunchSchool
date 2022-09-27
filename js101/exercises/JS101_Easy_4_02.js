let read = require('readline-sync');

let numbers = [];
numbers.length = 5

numbers[0] = read.question('Enter the 1st number: ');
numbers[1] = read.question('Enter the 2nd number: ');
numbers[2] = read.question('Enter the 3rd number: ');
numbers[3] = read.question('Enter the 4th number: ');
numbers[4] = read.question('Enter the 5th number: ');

let lastNumber = read.question('Enter the 6th number: ');

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${numbers[0]}, ${numbers[1]},\
  ${numbers[2]}, ${numbers[3]}, ${numbers[4]}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${numbers[0]}, \
  ${numbers[1]}, ${numbers[2]}, ${numbers[3]}, ${numbers[4]}.`);
}

//Further Exploration

if (numbers.some(num => num > 25)) {
  console.log(true);
} else {
  console.log(false);
}
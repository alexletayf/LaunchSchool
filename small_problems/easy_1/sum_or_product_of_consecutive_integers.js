const read = require('readline-sync');

function integerSum(int) {
  let answer = 0;
  let index = 0;
  while (index <= int) {
    answer += index;
    index++;
  }

  return answer;
}

function integerProduct(int) {
  let answer = 1;
  let index = 1;

  while (index <= int) {
    answer = answer * index;
    index++;
  }

  return answer;
}

let integer = Number(read.question(`Please enter an integer greater than 0:\n`));
let operation = read.question(`Enter "s" to compute the sum, or "p" to compute the product.\n`);

let integerSumNum = integerSum(integer);
let integerProductNum = integerProduct(integer);

if (operation === "s") {
  console.log(`The sum of the integers betwen 1 and ${integer} is ${integerSumNum}`);
} else if (operation === 'p') {
  console.log(`The product of the integers betwen 1 and ${integer} is ${integerProductNum}`);
} else {
  console.log(`Invalid input "${operation}"`);
}

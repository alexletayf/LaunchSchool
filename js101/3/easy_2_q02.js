let numbers = [1, 2, 3, 4, 5];

let newNumbers = numbers.slice(0).reverse();
console.log(numbers);
console.log(newNumbers);

let newNumbers2 = numbers.slice(0).sort((num1, num2) => num2 - num1);
console.log(numbers);
console.log(newNumbers);
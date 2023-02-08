//calculate 1st fibonacci
//assign to a variable
//evaluate length and compare to required length

function findFibonacciIndexByLength(digits) {
  numberOfDigits = String(digits).length;

  let counter1 = 1n;
  let counter2 = 0n;
  let fibonacci = 0n;
  let iterations = 0;
  while (true) {
    //console.log(fibonacci)
    if (String(fibonacci).length === digits) {break};
    fibonacci = counter2 + counter1;
    counter1 = counter2;
    counter2 = fibonacci;
    iterations++;
  }

  return iterations;
}

console.log(findFibonacciIndexByLength(10000));
function fibonacciIndex(arg) {
  let index = 2n;
  let fibonacciNow = 1n;
  let fibonacciPrevious = 1n;
  let fibonacciNowSaved = 2n;
  let length = 1n;

  do {
    fibonacciNowSaved = fibonacciNow;
    fibonacciNow = fibonacciNow + fibonacciPrevious;
    fibonacciPrevious = fibonacciNowSaved;
    length = fibonacciNow.toString().length;
    index++;
    //console.log(`\n${fibonacciNow}**`);
  } while (length !== arg);

  return index;
}

console.log(fibonacciIndex(10000));
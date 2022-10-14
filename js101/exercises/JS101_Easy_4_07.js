let numbersArray = [1, 2, 3, 4, 5];

console.log(runningTotal(numbersArray));

function runningTotal(numArr) {
  let runningTotalSum = 0;
  let runningTotalArray = [];

  numArr.forEach(elem => {
    runningTotalSum += elem;
    runningTotalArray.push(runningTotalSum);
  });

  return runningTotalArray;
}
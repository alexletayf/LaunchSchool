let testArray1 = [3, 5];
let testArray2 = [2, 5, 7, 11, 13, 17];

function multiplicativeAverage(arr) {
  let numberSum = 1;
  arr.forEach(num => {
    numberSum *= num;
  });

  numberSum = String((numberSum / arr.length).toFixed(3));

  return numberSum;
}

console.log(multiplicativeAverage(testArray1));
console.log(multiplicativeAverage(testArray2));
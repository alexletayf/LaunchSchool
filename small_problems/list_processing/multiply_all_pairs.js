const arrNum1 = [2, 4];
const arrNum2 = [4, 3, 1, 2];

function multiplyAllPairs(arr1, arr2) {
  const rtnArr = [];

  const arrowFunction = (value) => {
    arr2.forEach(value2 => rtnArr.push(value * value2));
  }

  arr1.forEach(arrowFunction);

  rtnArr.sort((a, b) => a - b);
  
  console.log(rtnArr);
}

multiplyAllPairs(arrNum1, arrNum2);
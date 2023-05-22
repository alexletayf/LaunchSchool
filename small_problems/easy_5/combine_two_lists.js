const testArr1 = [1, 2, 3];
const testArr2 = ['a', 'b', 'c'];

function interleave(arr1, arr2) {
  let resultArray = [];

  for (let index = 0; index < arr1.length; index++) {
    resultArray.push(arr1[index], arr2[index]);
  }

  return resultArray;
}

console.log(interleave(testArr1, testArr2));
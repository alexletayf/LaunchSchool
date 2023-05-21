function halvsies(arr) {
  // Is the array's length even or odd
  const arrIsEven = (arr.length % 2) === 0;

  let firstArray = [];
  let secondArray = [];

  if (arrIsEven) {
    firstArray = arr.slice(0, (arr.length / 2));
    secondArray = arr.slice(arr.length / 2, arr.length);
  } else {
    firstArray = arr.slice(0, Math.ceil(arr.length / 2));
    secondArray = arr.slice(Math.ceil(arr.length / 2), arr.length);
  }

  const returnArray = [firstArray, secondArray];

  return returnArray;
}

console.log(halvsies([1, 2, 3, 4, 5, 6, 7]));

console.log(halvsies([1, 2, 3, 4]));

let testArray = [1, 2, 3, 4, 5];

function oddities(arr) {
  if (!(Array.isArray(arr))) {
    return undefined;
  }
  let returnArray = arr.filter(elem => {
  return (elem % 2 !== 0);
  });
return returnArray;
}

console.log(oddities(testArray));
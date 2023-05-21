let ages = [1, 2, 3, 3];
let numbers = [4, 5, 6, 6];

const union = function (array1, array2) {
  /*This function joins two arrays and deletes duplicates
   in the resulting array*/
  const joinedArray = array1.concat(array2);
  const returnArray = [... new Set(joinedArray)];

  return returnArray;
}

console.log(union(ages, numbers));
//Sort the array in ASC order (return a new arr)

//three arrays inside another array

//

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = [];

arr.forEach(function(element, index) {
  if (typeof element[0] === 'string') {
    newArr[index] = element.sort();
  }
  if (typeof element[0] === 'number') {
    newArr[index] = element.sort((a, b) => a - b);
  }
});

console.log(newArr);


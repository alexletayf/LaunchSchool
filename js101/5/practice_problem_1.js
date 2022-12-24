let arr = ['10', '11', '9', '7', '8'];

for (let index = 0; index < arr.length; index++) {
  arr[index] = Number(arr[index]);
};

let newArr = arr.sort((a, b) => b - a);
console.log(newArr);
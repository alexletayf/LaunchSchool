function reverseNumber(num) {
  let result = 0;
  let right = 0;

  while (num > 0) {
    right = num % 10;
    result = (result * 10) + right;
    num = Math.floor(num / 10);
  }
  return result;
}

console.log(reverseNumber(100));
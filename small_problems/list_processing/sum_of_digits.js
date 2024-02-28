function sumDigits(num) {
  let numArr = num.toString().split('');
  let numSum = 0;
  numArr.forEach(elem => {
    numSum += Number(elem);
  });
  return numSum;
}

console.log(sumDigits(123));
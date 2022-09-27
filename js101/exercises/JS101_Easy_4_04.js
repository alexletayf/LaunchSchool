function isPalindrome(str) {
  let frontArr = str.split('');
  let backArr = str.split('').reverse();

  return (frontArr.every((elem, idx) => {
    return (elem === backArr[idx]);
  }));
}

console.log(isPalindrome('ooloo'));
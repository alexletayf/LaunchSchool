function isPalindromicNumber(num) {
  return (num.toString() === num.toString().split('').reverse().join(''));
};

console.log(isPalindromicNumber(101));
console.log(isPalindromicNumber(12233221));
console.log(isPalindromicNumber(123));
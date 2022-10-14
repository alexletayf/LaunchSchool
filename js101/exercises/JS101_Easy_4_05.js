function isPalindrome(str) {
  //Create two arrays front and backwards
  let originalStrArr = str.toUpperCase().split('');
  let newStrArr = str.toUpperCase().split('').reverse();
  let originalStrArrReformed = [];
  let newStrArrReformed = [];
  
  //Remove alphanumeric characters from letters being passed to reformed arrays
  originalStrArr.forEach(letter => {
    //IF (NOT LETTER) {} ... ;
    if (!(
      (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90)
      ||
      (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122)
    )) {
      originalStrArrReformed.push(letter);
    }
  });

  newStrArr.forEach(letter => {
    //IF (NOT LETTER) {} ... ;
    if (!(
      (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90)
      ||
      (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122)
    )) {
      newStrArrReformed.push(letter);
    }
  });

  return (originalStrArrReformed.join('') === newStrArrReformed.join(''));
}

console.log(isPalindrome('356a653'));
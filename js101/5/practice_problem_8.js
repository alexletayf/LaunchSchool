let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = '';

Object.values(obj).forEach(
  function (elem) {
    elem.forEach(
      function(subElem) {
        subElem.split('').forEach(
          function(letter) {
            if (
              letter.toUpperCase() === 'A' ||
              letter.toUpperCase() === 'E' ||
              letter.toUpperCase() === 'I' ||
              letter.toUpperCase() === 'O' ||
              letter.toUpperCase() === 'U') {
              vowels += letter;
            }
          }
        );
      }
    );
  }
);

console.log(vowels);
function reverseLetters(word) {
  let wordArray = word.split('');
  let resultArray = [];

  wordArray.forEach(letter => {
    resultArray.unshift(letter);
  });

  return resultArray.join('');
}

function reverseWords(words) {
  let splitArray = words.split(' ');
  let workArray = [];
  splitArray.forEach(word => {
    if (!(word.length >= 5)) {
      workArray.push(word);
    } else {
      workArray.push(reverseLetters(word));
    }
  });
  return workArray.join(' ');
}

console.log(reverseWords('I am your father'));
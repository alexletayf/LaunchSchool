function reverseSentence(sentence) {
  let orderedArray = sentence.split(' ');

  let resultArray = [];

  orderedArray.forEach(elem => {
    resultArray.unshift(elem);
  });

  return resultArray.join(' ');
}

console.log(reverseSentence('I am your father'));
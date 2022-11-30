function swap(txt) {
  let wordsArray = txt.split(' ');

  for (let idx = 0; idx < wordsArray.length; idx++) {
    wordsArray[idx] = swapFirstLastCharacters(wordsArray[idx]);
  }

  return wordsArray.join(' ');
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

console.log(swap('Hello'));
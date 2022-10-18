let text = 'Hello, fiddle diddle dooh';

function wordSizes(str) {
  let wordArr = str.split(' ');
  let wordObj = {};

  let idx = 0;
  while (idx < wordArr.length) {
    let wordSize = wordArr[idx].length;

    if (wordSize === 0) {
      continue;
    }

    console.log(wordObj[wordSize]);

    if (!wordObj[wordSize]) {
      wordObj[wordSize] = 0;
    }
    
    wordObj[wordSize] += 1;
    idx++;
  }

  return wordObj;
}

console.log(wordSizes(text));
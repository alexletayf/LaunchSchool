let text = 'Hello, fiddle diddle dooh';

function wordSizes(str) {
  let wordArr = str.replace(/[^a-z ]/ig, '').split(' ');
  let wordObj = {};

  let idx = 0;
  while (idx < wordArr.length) {
    let wordSize = wordArr[idx].length;

    if (wordSize === 0) {
      continue;
    }

    if (!wordObj[wordSize]) {
      wordObj[wordSize] = 0;
    }
    
    wordObj[wordSize] += 1;
    idx++;
  }

  return wordObj;
}

console.log(wordSizes(text));
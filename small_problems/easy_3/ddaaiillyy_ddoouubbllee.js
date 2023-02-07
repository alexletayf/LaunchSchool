function crunch(str) {
  let answer = '';
  let strArr = str.split('');

  for (let counter = 0; counter < str.length; counter++) {
    if (strArr[counter] !== strArr[counter - 1]) {
      answer += strArr[counter];
    }
  }

  return answer;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
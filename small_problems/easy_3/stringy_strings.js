function stringy(int) {
  let answer = '';

  for (let counter = 0; counter < int; counter++) {
    if (counter % 2) {
      answer += '0';
    } else {
      answer += '1';
    }
  }
  return answer;
}

console.log(stringy(9));
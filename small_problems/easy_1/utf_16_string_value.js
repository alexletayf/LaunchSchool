function utf16Value(str) {
  let answer = 0;
  
  for (let index = 0; index < str.length; index++) {
    answer += str.charCodeAt(index);
  }

  return answer;
}

console.log(utf16Value('Four Score'));
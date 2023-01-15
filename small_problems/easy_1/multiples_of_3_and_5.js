function multisum(num) {
  let answer = 0;
  for (let integer = 1; integer <= num; integer++) {
    if (integer % 3 === 0 || integer % 5 === 0) {
      answer += integer;
    }
  }

  return answer;
}

console.log(multisum(20));
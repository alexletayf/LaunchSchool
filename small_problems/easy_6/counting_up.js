function sequence(num) {
  let result = [];
  for (let idx = 0; idx <= num; idx++) {
    result[idx] = idx;
  }

  return result;
}

console.log(sequence(10));
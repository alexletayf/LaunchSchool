function sequence(count, numSequence) {
  let result = [];

  for (let idx = 1; idx <= count; idx++) {
    result.push(idx * numSequence);
  }

  return result;
}

console.log(sequence(4, -7));
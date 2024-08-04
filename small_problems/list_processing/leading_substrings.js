function leadingSubstrings(txtInput) {
  let arrSubstrings = [];
  for (let idx = 1; idx <= txtInput.length; idx++) {
    let substring = txtInput.slice(0, idx);
    arrSubstrings.push(substring);
  }
  return arrSubstrings;
}

const sample = 'ABCD';

console.log(leadingSubstrings(sample));
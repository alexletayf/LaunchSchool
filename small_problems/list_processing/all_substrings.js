function leadingSubstrings(txtInput) {
  let arrSubstrings = [];
  for (let idx = 1; idx <= txtInput.length; idx++) {
    let substring = txtInput.slice(0, idx);
    arrSubstrings.push(substring);
  }
  return arrSubstrings;
}

function substrings(txtInput) {
  let arrSubstrings = [];
  for (let idx = 0; idx <= txtInput.length; idx++) {
    let substring = leadingSubstrings(txtInput.slice(idx, txtInput.length));
    arrSubstrings.push(substring);
  }
  return arrSubstrings;
}

console.log(substrings('abcde'));
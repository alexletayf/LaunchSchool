function leadingSubstrings(text) {
  let rtnArr = [];
  let textArr = text.split('');
  for (let i = 1; i < text.length + 1; i++) {
      rtnArr.push(text.slice(0,i));
  }
  return rtnArr;
}

const sample = 'ABCD';

console.log(leadingSubstrings(sample));
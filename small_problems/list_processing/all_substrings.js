function leadingSubstrings(text) {
  let rtnArr = [];
  let textArr = text.split('');
  for (let i = 1; i < text.length + 1; i++) {
      rtnArr.push(text.slice(0,i));
  }
  return rtnArr;
}

function substrings(text) {
  let txtArr = text.split('');
  let rtnArr = [];
  for (let i = 0; i < text.length; i++ ) {
    rtnArr.push(txtArr.slice(i, txtArr.length));
  }
  return rtnArr;
}

console.log(substrings('hello'));
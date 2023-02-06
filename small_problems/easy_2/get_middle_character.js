//determine str length
//if str length odd
//  divide by two and apply Math.ceil()
//  return str index with that
//else
//  divide by two
//  return str index with that and also + 1  

function centerOf(str) {
  if (str.length % 2 !== 0) {
    let index = Math.ceil(str.length / 2);
    return str[index];
  } else {
    let index1 = str.length / 2;
    let index2 = (str.length / 2) + 1;
    return `${str[index1]} ${str[index2]}`
  }
}

console.log(centerOf('Hello'));
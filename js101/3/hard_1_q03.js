function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}


function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if (dotSeparatedWords.length !== 4) return false;

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) return false;
  }

  return true;
}

let realIp = '10.5.6.3';
let fakeIp = '5.5.5';

console.log(isDotSeparatedIpAddress(realIp));
console.log(isDotSeparatedIpAddress(fakeIp));


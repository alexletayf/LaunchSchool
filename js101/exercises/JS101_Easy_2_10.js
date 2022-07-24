function stringToNumberBasic(x) {
  switch (x) {
    case "1":
      return 1;
      break;
    case "2":
      return 2;
      break;
    case "3":
      return 3;
      break;
    case "4":
      return 4;
      break;
    case "5":
      return 5;
      break;
    case "6":
      return 6;
      break;
    case "7":
      return 7;
      break;
    case "8":
      return 8;
      break;
    case "9":
      return 9;
      break;
    default:
      return 0;
      break;
  }
}

function stringToNumberLoop(str) {
  let result = 0;
  let i = 0;
  let j = 0;
  for (i = 0, j = str.length; i < str.length; i++, j--) {
    result += stringToNumberBasic(str[i]) * (10 ** j);
  }
  return result / 10;
}

function stringToSignedNumber(str) {
  let newStr = '';
  if (str) {
    switch (str[0]) {
      case "-":
        newStr = str.substring(1);
        return stringToNumberLoop(newStr) * (-1);
        break;
      case "+":
        newStr = str.substring(1);
        return stringToNumberLoop(newStr);
        break;
      default:
        return stringToNumberLoop(str);
        break;
    }
  }
}

let signedNumber = '-1500';

console.log(stringToSignedNumber(signedNumber));
console.log(typeof stringToSignedNumber(signedNumber));
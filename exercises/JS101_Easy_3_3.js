let quantity = 5;

function stringy(num) {
  let logger = true;
  let result = '';
  for (let looper = 0; looper < num; looper++) {
    if (logger === true) {
      result += '1';
      logger = false;
    } else {
      result += '0';
      logger = true;
    }
  }
  return result;
}

console.log(stringy(quantity));
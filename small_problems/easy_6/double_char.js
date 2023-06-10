function repeater(str) {
  let returnString = '';

  for (let idx = 0; idx < str.length; idx++) {
    returnString = returnString.concat(str[idx] + str[idx]);
  }

  return returnString;
}

console.log(repeater('Hello'));
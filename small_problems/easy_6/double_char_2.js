function repeater(str) {
  let returnString = '';

  for (let idx = 0; idx < str.length; idx++) {
    if ('aeiou'.includes(str[idx])) {
      returnString = returnString.concat(str[idx]);
    } else {
      returnString = returnString.concat(str[idx] + str[idx]);
    }
  }

  return returnString;
}

console.log(repeater('Hello'));
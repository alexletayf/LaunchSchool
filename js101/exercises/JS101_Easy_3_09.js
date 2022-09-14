let text = "---what's my +*& line?";

function isAlphabetic(str) {
  if (
    (str.charCodeAt() >= 65 && str.charCodeAt() <= 90)
    ||
    (str.charCodeAt() >= 97 && str.charCodeAt() <= 122)
    ) {
    return true
  } else { 
    return false
  }
}

function cleanUp(str) {
  let cleanString = '';
  for (let counter = 0; counter < str.length; counter++) {
    if (isAlphabetic(str[counter])) {
      cleanString += str[counter];
    } else if (!(cleanString.endsWith(' '))) {
      cleanString += ' ';
    }
  }
  return cleanString;
}

console.log(cleanUp(text));
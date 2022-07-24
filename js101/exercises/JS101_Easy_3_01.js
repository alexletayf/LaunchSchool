let hello = "hello, world!!";

function crunch(str) {
  let result = "";
  let i = 0;
  do {
    if (str[i] !== str[i + 1]) {
      result += str[i];
    }
    i++;
  } while (i <= str.length);
  return result;
}

console.log(crunch(hello));
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

function countLetter(str, letter) {
  return str.split('').filter(char => char === letter).length;
}

console.log(countLetter(statement1, 't'));
console.log(countLetter(statement2, 't'));
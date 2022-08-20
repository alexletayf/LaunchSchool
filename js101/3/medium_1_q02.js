let munstersDescription = "The Munsters are creepy and spooky.";

let newString = "";

[...munstersDescription].forEach(character => {
  if (character === character.toUpperCase()) {
    newString += character.toLowerCase();
  } else {
    newString += character.toUpperCase();
  }
});

console.log(newString);
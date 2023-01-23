const read = require('readline-sync');

function greet(name) {
  if (name.endsWith('!')) {
    let trimmedName = name.slice(0, name.length - 1).toUpperCase();
    console.log(`HELLO ${trimmedName} WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
}

greet('Alex!');
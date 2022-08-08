function indent(text, lines) {
  for (let counter = 0; counter < lines; counter++)
  console.log(`${' '.repeat(counter)} ${text}`);
}

indent('The Flintstones Rock!', 10);
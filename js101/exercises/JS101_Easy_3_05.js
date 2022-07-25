function triangle(sides) {
  for (let blanks = sides; blanks >= 0; blanks--) {
      console.log(`${' '.repeat(blanks)}${'*'.repeat(sides - blanks)}`);
  }
}

triangle(5);
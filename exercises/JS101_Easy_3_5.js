function triangle(height) {
  let spaces = height - 1;
  let stars = 1;

  do {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
    spaces--;
    stars++;
    height--;
  } while (height > 0);
}

triangle(5);
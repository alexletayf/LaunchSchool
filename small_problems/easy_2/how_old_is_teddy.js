function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

const teddysAge = generateRandomNumber(20, 120);

console.log(`Teddy is ${teddysAge} years old!`);
function teddysAge(min, max) {
  let newMin = 0;
  let newMax = 0;

  if (min > max) {
    newMin = max;
    newMax = min;
  } else {
    newMin = min;
    newMax = max;
  }

  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
}

console.log(teddysAge(20, 120));
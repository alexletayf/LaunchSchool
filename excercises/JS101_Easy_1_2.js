function logOddNumbers(initial, final) {
  for (let i = initial; i <= final; i++) {
    if (Math.abs(i) % 2) {
      console.log(i);
    }
  }
}
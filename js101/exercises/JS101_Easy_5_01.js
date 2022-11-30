function dms(number) {
	// Validation for a valid number
	if (typeof number !== 'number') return 0;
	if (number < 0 || number > 360) return 0;

  const degrees = Math.floor(number);
  const minutes = Math.floor((number % 1) * 60);
  const seconds = Math.floor((((number % 1) * 60) % 1) * 60);

  return `${degrees}˚ ${minutes}' ${seconds}"` 
}

console.log(dms(76.73));
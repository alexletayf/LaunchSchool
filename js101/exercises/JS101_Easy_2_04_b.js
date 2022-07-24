function multiply(first, second) {
	return first * second;
}

function toPower(base, power) {
	if (power === 1) {
		return base;
	} else {
		return multiply(base, toPower(base, power -1));
	}
}

console.log(toPower(5, 4));
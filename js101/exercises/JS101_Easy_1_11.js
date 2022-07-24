function utf16Value(str) {
	let sum = 0;
	let long = str.length - 1
	for (let i = 0; i <= long; i++) {
		sum += str[i].charCodeAt();
	}
	return sum;
}

console.log(utf16Value("Four score"));

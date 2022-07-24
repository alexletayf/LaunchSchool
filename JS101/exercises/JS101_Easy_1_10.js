let multisum = function multisum(arg) {
	let x = 0;
	for (let i = 1; i <= arg; i++)  {
		if (!(i % 3) || !(i % 5)) {
			x += i;
		}
	}
	return x;
}

console.log(multisum(20));
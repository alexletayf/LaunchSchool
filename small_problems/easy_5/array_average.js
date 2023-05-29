function average(arr) {
	let sum = 0;

	arr.forEach( num => {
		sum += num;
	})

	let answer = sum / arr.length;

	answer = Math.round(answer);

	console.log(answer);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40


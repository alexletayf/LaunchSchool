function oddities(arr) {
	let odds = [];
	let evens = [];
	for (let element in arr) {
		if (element % 2) {
			//odd
			odds.push(arr[element]);
		} else {
			//even
			evens.push(arr[element]);
		}
	}
	return evens \n odds;
}

let numbers = [1, 2, 3, 4];

console.log(oddities(numbers)); 
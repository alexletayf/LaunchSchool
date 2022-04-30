function oddities(arr) {
	let result = [];
	for (let element in arr) {
		if (element % 2) {
			//odd
			result.push(arr[element]);
		} else {
			//even
			continue;
		}
	}
	return result;
}

let numbers = [1, 2, 3, 4];

console.log(oddities(numbers));
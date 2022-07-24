let str = "1050";

function whatNumberx(x) {
	switch (x) {
		case "1":
			return 1;
			break;
		case "2":
			return 2;
			break;
		case "3":
			return 3;
			break;
		case "4":
			return 4;
			break;
		case "5":
			return 5;
			break;
		case "6":
			return 6;
			break;
		case "7":
			return 7;
			break;
		case "8":
			return 8;
			break;
		case "9":
			return 9;
			break;
		default:
			return 0
	}
}

function toNumberx (num) {
	let result = 0;
	let i = 0;
	let j = 0;
	for (i = 0, j = num.length; i < str.length; i++, j--) {
		result += whatNumberx(num[i]) * (10 ** j);
	}
	return result / 10;
}

console.log(typeof toNumberx(str)); //number
console.log(toNumberx(str)); //1050
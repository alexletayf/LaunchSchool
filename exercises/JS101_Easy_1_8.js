function leapYear(year) {
	if ((year % 4)) {
		return false;
	} else if ((year % 100)) {
		return true;
	} else if ((year % 400)) {
		return false;
	} else {
		return true;
	}
}

console.log(leapYear(4));
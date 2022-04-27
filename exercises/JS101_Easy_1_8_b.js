function leapYear(year) {
	if (!(year % 400) && !(year % 100)) {
		return true;
	} else if ((year % 400) && (year % 100) && !(year % 4)) {
		return true;
	} else {
		return false;
	}
}

console.log(leapYear(2015));
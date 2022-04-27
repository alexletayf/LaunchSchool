function leapYearGregorian(year) {
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

function leapYearJulian(year) {
	if (!(year % 4)) {
		return true;
	}
}

function leapYear(year) {
	if (year < 1752) {
		return leapYearJulian(year);
	} else {
		return leapYearGregorian(year);
	}
}

console.log(leapYear(400));
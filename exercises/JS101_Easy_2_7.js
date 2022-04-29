function xor(p1, p2) {
	if (p1 && p2) {
		return false;
	} else if (p1 || p2) {
		return true;
	} else {
		return false;
	}
}

//Better and shorter solution
const xor2 = (elem1, elem2) => !elem1 !== !!!elem2;
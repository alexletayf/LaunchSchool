const rlSync = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;

//Asking for measurement type
console.log('Write meters or feet to choose your measurement type.')
let measureType = '';

do {
	measureType = rlSync.prompt();
}
while (!(measureType == 'meters' || measureType == 'feet'))


//Asking for the length
console.log(`Enter the length of the room in ${measureType}:`);
let roomLength = rlSync.prompt();
roomLength = parseInt(roomLength);


//Asking for the width
console.log(`Enter the width of the room in ${measureType}:`);
let roomWidth = rlSync.prompt();
roomWidth = parseInt(roomWidth);

//Conversion functions
function convertMetersToFeet(meters) {
	return meters * SQMETERS_TO_SQFEET;
}

function convertFeetToMeters(feet) {
	return feet / SQMETERS_TO_SQFEET;
}

//Calculate area
let area = roomWidth * roomLength;

//Calculate alternative area
let areaConversion;

if (measureType == 'meters') { 
	areaConversion = area * SQMETERS_TO_SQFEET;
} else {
	areaConversion = area / SQMETERS_TO_SQFEET;
}

//Result
if (measureType == 'meters') {
	console.log(`The area of the room is ${area} square meters (${areaConversion} square feet).`);
} else {
	console.log(`The area of the room is ${area} square feet (${areaConversion} square meters).`);
}
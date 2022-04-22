const rlSync = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;

//Asking for the length
console.log('Enter the length of the room in meters:');
let roomLength = rlSync.prompt();

//Asking for the width
console.log('Enter the width of the room in meters:');
let roomWidth = rlSync.prompt();

function convertMetersToFeet(meters) {
	return meters * SQMETERS_TO_SQFEET;
}

let areaMeters = roomLength * roomWidth;

let areaFeet = convertMetersToFeet(areaMeters);

//Logging to the console the answer
console.log(`The area of the room is ${areaMeters} square meters (${areaFeet} square feet).`);
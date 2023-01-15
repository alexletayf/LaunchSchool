const FEET_IN_SQUARE_METER = 10.7639;

const read = require('readline-sync');

let roomLength = read.question('Enter the length of the room in meters:\n');
let roomWidth = read.question('Enter the width of the room in meters:\n');

let areaMeters = roomLength * roomWidth;
let areaFeet = areaMeters * FEET_IN_SQUARE_METER;

console.log(`The area of the room is ${areaMeters} square meters (${areaFeet} square feet)`);


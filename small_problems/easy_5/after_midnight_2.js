function afterMidnight(timeString) {
  let numberOfHours = Number(timeString.slice(0,2));
  let numberOfMinutes = Number(timeString.slice(3,5));

 return (numberOfHours * 60) + numberOfMinutes;
}

console.log(afterMidnight("12:34"));

function beforeMidnight(timeString) {
  let numberOfHours = Number(timeString.slice(0,2));
  let numberOfMinutes = Number(timeString.slice(3,5));

 return 1440 - ((numberOfHours * 60) + numberOfMinutes);
}

console.log(beforeMidnight("12:34"));
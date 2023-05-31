/*Problem > Make a function that receives a negative or positive integer and
outputs a string representing the time in "hh:mm" format 
*/

/*Examples > 
 0 => "00:00" 
-3 => "11:57"
 3 => "00:03" 
 */

/*Data Structure > 
  input = number integer
  output= string with "hh:mm" format
*/

function hoursToStrPositive(time) {
  if ((time % 60) <= 1) {
    return "00"
  } else {
    let totalHours = time / 60;

    let hoursBeforeMidnight = 0;

    for (let idx = totalHours; idx > 0; idx--) {
      if (hoursBeforeMidnight < 0) {
        hoursBeforeMidnight = 24;
      } else {
        hoursBeforeMidnight--;
      }
    }
    return String(hoursBeforeMidnight).padStart(2,"0");
  }
}

function hoursToStrNegative(time) {
  if ((Math.abs(time) % 60) <= 1) {
    return "00"
  } else {
    let totalHours = Math.abs(time) / 60;

    let hoursAfterMidnight = 0;

    for (let idx = 0; idx < totalHours; idx++) {
      if (hoursAfterMidnight > 24) {
        hoursAfterMidnight = 0;
      } else {
        hoursAfterMidnight++;
      }
    }
    return String(hoursAfterMidnight).padStart(2,"0");
  }
}



function timeOfDay(time) {
  let strMinutes = String((Math.abs(time) % 60)).padStart(2,"0");
  let strHours = "";

  if (time >= 0) {
    strHours = hoursToStrPositive(time);
  } else {
    strHours = hoursToStrNegative(time);
  }

  return strHours + ":" + strMinutes;
}

console.log(timeOfDay(-1441));
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

function convertIntegerToTime(integer) {

  let input = Math.abs(integer);
  let horas = Math.floor(input / 60) % 24;
  let minutos = input % 60;

  if ((60 - minutos === 60) && (23 - horas === 23)) {
    horas = 0;
  } else if (60 - minutos === 60) {
    horas = 23 - horas + 1;
  } else {
    horas = 23 - horas;
  }

  if (60 - minutos === 60) {
    minutos = 0;
  } else {
    minutos = 60 - minutos;
  }

  horas = String(horas);
  minutos = String(minutos);

  return `${horas.padStart(2,0)}:${minutos.padStart(2,0)}`;
}

console.log(convertIntegerToTime(0),'00:00');
console.log(convertIntegerToTime(1),'00:01');
console.log(convertIntegerToTime(10),'23:50');
console.log(convertIntegerToTime(60),'23:00');
console.log(convertIntegerToTime(65),'22:55');
console.log(convertIntegerToTime(1440),'00:00');
console.log(convertIntegerToTime(500),'23:00');
console.log(convertIntegerToTime(1505),'22:50');
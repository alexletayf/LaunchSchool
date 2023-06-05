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
function convertPositiveIntegerToTimeString(integer) {
  let input = integer;
  let horas = String(Math.floor(input / 60) % 24);
  let minutos = String(input % 60);

  return `${horas.padStart(2,0)}:${minutos.padStart(2,0)}`
}

function convertNegativeIntegerToTimeString(integer) {
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

function convertIntegerToTimeString(integer) {
  if (integer >= 0) {
    return convertPositiveIntegerToTimeString(integer);
  } else {
    return convertNegativeIntegerToTimeString(integer);
  }
}





console.log(convertIntegerToTimeString(0), "00:00");
console.log(convertIntegerToTimeString(1), "00:01");
console.log(convertIntegerToTimeString(-1), "23:59");
console.log(convertIntegerToTimeString(1445), "00:05");
console.log(convertIntegerToTimeString(-1445), "23:55");
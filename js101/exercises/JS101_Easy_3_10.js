/* Notes

PROBLEM
Take a year as input and return the century.

INPUT
Number

OUTPUT
String

RULES
  IMPLICIT
  * The input must be a positive integer number
  * The century name must not start with 0
  * Centuries do not overlap
  * Most calculate any positive integer number year even in the future
  * The 1st century 1 to 100 must return '1st'
  * The 2nd century 101 to 200 must return '2nd'
  * The 3rd century 201 to 300 must return '3rd'

  EXPLICIT
  * New centuries begin in years that end with 01

  QUESTIONS
  ¿What should the function return in case of input 0?
  ¿What should the function return in case of input negative integer?
  ¿What should the function return in case of input non integer?
  ¿What should the function return in case of input null?
  ¿What should the function return in case of input undefiner?
  ¿What should the function return in case of input string number?
  ¿What should the function return in case of input string non-number?
  ¿What should the function return in case of input anything else?

DATA STRUCTURE/ ALGORITHM
Evaluate for number
Evaluate for integer
Evaluate for positive number
Evaluate for any of the 3 special cases
IF any of the special cases return string with century
Evaluate the century (301 --> infinite)
  Divide by 100
  if remainder = 0 then century is (year / 100) -1
  else century is (year / 100) rouded up
Return string with century

*/

let year1 = 5;
let year2 = 105;
let year3 = 205;
let year4 = 301;
let year5 = 2022;
let year6 = "Not a year";

function century(year) {
  // Validate for a valid input
  if (typeof year === 'Number') {
    return undefined;
  } else if (year % 1 !== 0) {
    return undefined;
  } else if (year < 1) {
    return undefined;
  }

  //Special Cases
  if (year < 101) {
    return '1st';
  } else if (year < 201) {
    return '2nd';
  } else if (year < 301) {
    return '3rd'
  }

  let centuryNumber = 0;

  if ((year / 100) % 1 === 0) {
    centuryNumber = year / 100;
  } else {
    centuryNumber = Math.ceil(year / 100);
  }

  return `${centuryNumber}th`;
  
}

console.log(century(year1));
console.log(century(year2));
console.log(century(year3));
console.log(century(year4));
console.log(century(year5));
console.log(century(year6));

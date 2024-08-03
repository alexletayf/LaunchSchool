/*Question 1*/
// Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;
//NO

/*Question 2*/
// How can you determine whether a given 
// string ends with an exclamation mark (!)?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

str1.endsWith("!");
str2.endsWith("!");

/*Question 3*/
// Determine whether the following object of 
// people and their age contains an entry for 'Spot':
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

ages.hasOwnProperty("Spot");

/*Question 4*/
// Using the following string, create a new string that 
// contains all lowercase letters except for the first character, 
// which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

munstersDescription.charAt(0).toUpperCase() + munstersDescription.slice(1);

/*Question 5*/
// What will the following code output?

console.log(false == '0'); // true
console.log(false === '0'); // false

/*Question6*/

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

ages['Marilyn'] = 22;

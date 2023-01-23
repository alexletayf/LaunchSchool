let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

function objectType(obj) {
  if (typeof obj === 'object') {
    if (Array.isArray(obj) === true) {
      return "Array";
    } else {
      return "Object (but not an Array)";
    }
  } else {
    return "not an Object";
  }
}

console.log(`The input is an ${objectType(numbers)}`);
console.log(`The input is an ${objectType(table)}`);

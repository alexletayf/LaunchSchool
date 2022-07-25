function validateDoubleness(num) {
  let number = String(num);

  if (number.length % 2 !== 0) {
    return false;
  }

  let firstHalf = number.substring(0, (number.length / 2));
  let secondHalf = number.substring((number.length / 2), number.length);

  if (firstHalf !== secondHalf) {
    return false;
  } else {
    return true;
  }
}

function twice(number) {
  if (validateDoubleness(number) === true) {
    return number;
  } else {
    return number * 2;
  }
}

console.log(twice(4444));
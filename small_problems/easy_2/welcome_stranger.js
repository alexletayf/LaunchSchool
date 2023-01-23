let nameExample = [["John", "Q", "Doe"]];
let professionExample = { title: "Master", occupation: "Plumber" };

function greetings(arr, obj) {
  let name = arr.join(' ');
  let profession = Object.values(obj).join(' ');

  return `Hello, ${name}! Nice to have a ${profession} around.`
}

console.log(greetings(nameExample, professionExample));
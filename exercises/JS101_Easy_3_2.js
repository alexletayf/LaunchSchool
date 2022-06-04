let text = "There is an itch on my back that I can´t scratch."

function logInBox(str) {
  let lengthDash = str.length;
  let topLine = `+-${'-'.repeat(lengthDash)}-+`;
  let topMiddleLine = `| ${' '.repeat(lengthDash)} |`;
  let middleLine = `| ${str} |`;
  let middleFinalLine = `| ${' '.repeat(lengthDash)} |`;
  let finalLine = `+-${'-'.repeat(lengthDash)}-+`;

  console.log(topLine);
  console.log(topMiddleLine);
  console.log(middleLine);
  console.log(middleFinalLine);
  console.log(finalLine);
}

logInBox(text);
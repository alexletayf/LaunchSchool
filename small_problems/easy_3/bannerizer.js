function logInBox(str) {
  console.log(`+-${'-'.repeat(str.length)}-+`);
  console.log(`| ${' '.repeat(str.length)} |`);
  console.log(`| ${str} |`);
  console.log(`| ${' '.repeat(str.length)} |`);
  console.log(`+-${'-'.repeat(str.length)}-+`);
}

logInBox('Hello, World!');
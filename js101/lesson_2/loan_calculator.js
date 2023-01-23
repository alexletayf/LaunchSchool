//External modules
const read = require(`readline-sync`);

do {
  console.clear();

  const welcomeMessage = `Welcome to Alex's Loan Calculator.\n\
  Follow the instructions to calculate your monthly payment.\n`;

  function isInvalidNumber(number) {
    return number.trim() === '' ||
           Number(number) < 0   ||
           Number.isNaN(Number(number));
  }

  function ask(questionText) {
    let response = ``;

    do {
      console.clear();
      console.log(welcomeMessage);
      response = read.question(`${questionText}\n>> `);
    } while (isInvalidNumber(response));

    return Number(response);
  }

  const loanAmount = ask(`What is your loan amount?`);

  const monthlyInterestRate = ask(`What is your yearly interest rate?\n\n\
  Write the rate as a decimal.`) / 12;

  const durationMonths = ask(`What is the duration of your loan in months?`);

  const monthlyPayment = loanAmount * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (0 - durationMonths))));

  console.clear();

  console.log(`Thank you for using Alex's Loan Calculator.\n\n\
  Considering:\n\
  1 A loan amount of ${loanAmount.toFixed(2)}\n\
  2 A yearly interest rate of ${(monthlyInterestRate * 12).toFixed(2)}\n\
  3 A loan duration of ${durationMonths} months \n`);

  console.log(`Your monthly payment should be $${monthlyPayment.toFixed(2)}\n`);

  const anotherCalculation = read.keyInYN("Would you like to do another calculation?");
} while (anotherCalculation);
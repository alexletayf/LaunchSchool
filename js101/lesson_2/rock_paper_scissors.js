const readline = require('readline-sync');
const VALID_OPTIONS = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(` => ${message}`);
}

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === ' scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
        prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
            (choice === 'paper' && computerChoice === 'scissors') ||
            (choice === 'scissors' && computerChoice === 'rock')) {
        prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}

let repeat = true;
do {
  prompt(`Choose one: ${VALID_OPTIONS.join(', ')}`);
  let choice = readline.question();

  while (!(VALID_OPTIONS.includes(choice))) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_OPTIONS.length);
  let computerChoice = VALID_OPTIONS[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  repeat = answer[0] == 'y';
} while (repeat);
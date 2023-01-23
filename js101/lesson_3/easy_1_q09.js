let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

function truncate(sentance, word) {
  let index = sentance.indexOf(word);
  return sentance.slice(0, index);
}

console.log(truncate(advice, 'house'));
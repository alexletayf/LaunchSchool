let advice = "Few things in life are as important important as house training your pet dinosaur.";

console.log(advice);

while (advice.includes('important')) {
  advice = advice.replace('important', 'urgent');
}

console.log(advice);
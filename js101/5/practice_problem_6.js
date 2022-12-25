let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let member in munsters) {
  const name = member;
  const age = munsters[member]['age'];
  const gender = munsters[member]['gender'];
  
  console.log(`${name} is a ${age}-year-old ${gender}.`);
}


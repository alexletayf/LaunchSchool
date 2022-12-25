let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let maleAgeSum = 0;

for (let key in munsters) {
  if (munsters[key]['gender'] === 'male') {
    maleAgeSum += munsters[key]['age'];
  }
}

console.log(maleAgeSum);
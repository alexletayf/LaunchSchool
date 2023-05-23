let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck','motorcycle',
  'motorcycle', 'car', 'truck'];

function countOcurrences(stuff) {
  let uniqueElements = [];

  stuff.forEach(elem => {
    if (uniqueElements.indexOf(elem) === -1) {
      uniqueElements.push(elem);
    }
  });

  uniqueElements.forEach((elem, idx, arr) => {
    let counter = 0;

    stuff.forEach((subelem, subidx, subarr) => {
      if (subelem === elem) {
        counter++;
      }
    });

    console.log(`${elem} => ${counter}`);
  });
}

countOcurrences(vehicles);
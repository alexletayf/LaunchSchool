function swapName(name) {
  let arrName = name.split(' ');

  return `${arrName[1]} ${arrName[0]}`;
}

console.log(swapName('Alejandro Muñoz'))
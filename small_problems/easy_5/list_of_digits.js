function digitList(number) {
  const numberText = String(number);
  let answerArray = [];
  [...numberText].forEach( letter => {
    answerArray.push(Number(letter));
  });

  return answerArray;
}

console.log(digitList(12345));
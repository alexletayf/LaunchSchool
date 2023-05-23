function multiplyList(list1, list2) {
  let answerList = [];

  for (let index = 0; index < list1.length; index += 1) {
    answerList.push(list1[index] * list2[index]);
  }

  return answerList;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]
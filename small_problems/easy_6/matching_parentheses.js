function evalBracketMatch(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      stack.push(str[i]);
    } else if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      stack.pop();
    }
  }

  return String(Boolean(stack.length == 0));
}

console.log(evalBracketMatch('Hello This is (nice) {heelooo}'));
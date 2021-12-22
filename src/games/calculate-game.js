import anyGame, { roundsCount } from '../index.js';
import generateRandNum from '../helpers/random-num.js';

export default () => {
  const rules = 'What is the result of the expression?';
  const rounds = [[], [], []];
  const operators = ['+', '-', '*'];
  let firstNum = 0;
  let secondNum = 0;
  let expression = '';

  for (let i = 0; i < roundsCount; i += 1) {
    firstNum = generateRandNum(1, 100);
    secondNum = generateRandNum(1, 100);
    const operator = operators[generateRandNum(0, operators.length - 1)];
    expression = `${firstNum} ${operator} ${secondNum}`;
    rounds[i].push(String(expression));
    if (operator === '+') {
      rounds[i].push(String(firstNum + secondNum));
    } else if (operator === '-') {
      rounds[i].push(String(firstNum - secondNum));
    } else {
      rounds[i].push(String(firstNum * secondNum));
    }
  }

  anyGame(rules, rounds);
};

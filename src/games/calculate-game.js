import anyGame, { roundsCount } from '../index.js';
import generateRandNum from '../helpers/random-num.js';

export default () => {
  const rules = 'What is the result of the expression?';
  const rounds = [];
  const operators = ['+', '-', '*'];
  let firstNum = 0;
  let secondNum = 0;
  let expression = '';

  for (let i = 0; i < roundsCount; i += 1) {
    firstNum = generateRandNum(1, 100);
    secondNum = generateRandNum(1, 100);
    const operator = operators[generateRandNum(0, operators.length)];
    expression = `${firstNum} ${operator} ${secondNum}`;
    let answer = '';
    if (operator === '+') {
      answer = String(firstNum + secondNum);
    } else if (operator === '-') {
      answer = String(firstNum - secondNum);
    } else {
      answer = String(firstNum * secondNum);
    }
    rounds.push([expression, answer]);
  }

  anyGame(rules, rounds);
};

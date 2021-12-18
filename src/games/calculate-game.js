import anyGame from '../index.js';
import { roundsCount } from '../index.js';
import generateRandNum from '../helpers/random-num.js';

export default () => {
  const rules = 'What is the result of the expression?';
  const expressions = [];
  const values = [];
  const operators = ['+', '-', '*'];
  let firstNum = 0;
  let secondNum = 0;
  let expression = '';

  for (let i = 0; i < roundsCount; i += 1) {
    firstNum = generateRandNum(1, 100);
    secondNum = generateRandNum(1, 100);
    const operator = operators[generateRandNum(0, operators.length - 1)];
    if (operator === '+') {
      values.push(String(firstNum + secondNum));
    } else if (operator === '-') {
      values.push(String(firstNum - secondNum));
    } else {
      values.push(String(firstNum * secondNum));
    }
    expression = `${firstNum} ${operator} ${secondNum}`;
    expressions.push(String(expression));
  }

  anyGame(rules, expressions, values);
};

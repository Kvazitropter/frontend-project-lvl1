import { anyGame } from './index.js';

export const calculateGame = () => {
  const rules = 'What is the result of the expression?';
  const expressions = [];
  const values = [];
  let workNum = 0;
  const operators = ['+', '-', '*'];
  let firstNum = 0;
  let secondNum = 0;
  let expression = '';

  while (workNum < 3) {
    firstNum = Math.ceil(Math.random() * 100);
    secondNum = Math.ceil(Math.random() * 100);
    let operator = operators[Math.floor(Math.random() * operators.length)];
    if (operator === '+') {
      values.push(String(firstNum + secondNum));
    } else if (operator === '-') {
      values.push(String(firstNum - secondNum));
    } else {
      values.push(String(firstNum * secondNum));
    }
    expression = `${firstNum} ${operator} ${secondNum}`;
    expressions.push(String(expression));
    workNum += 1;
  }

  anyGame(rules, expressions, values);
};


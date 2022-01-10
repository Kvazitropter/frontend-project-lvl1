import engine, { roundsCount } from '../index.js';
import generateRandNum from '../helpers/random-num.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  let result = '';
  switch (operator) {
    case '+':
      result = String(num1 + num2);
      break;
    case '-':
      result = String(num1 - num2);
      break;
    case '*':
      result = String(num1 * num2);
      break;
    default:
  }

  return result;
};

export default () => {
  const rounds = [];
  let firstNum = 0;
  let secondNum = 0;

  for (let i = 0; i < roundsCount; i += 1) {
    firstNum = generateRandNum(1, 100);
    secondNum = generateRandNum(1, 100);
    const operator = operators[generateRandNum(0, operators.length)];
    const question = `${firstNum} ${operator} ${secondNum}`;
    const answer = calculate(firstNum, secondNum, operator);
    if (answer !== '') {
      rounds.push([question, answer]);
    } else {
      i -= 1;
    }
  }

  engine(rules, rounds);
};

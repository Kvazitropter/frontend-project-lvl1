import engine, { roundsCount } from '../index.js';
import generateRandNum from '../helpers/random-num.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('unsupported operator');
  }
};

const generateRound = () => {
  const firstNum = generateRandNum(1, 100);
  const secondNum = generateRandNum(1, 100);
  const operator = operators[generateRandNum(0, operators.length)];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const answer = String(calculate(firstNum, secondNum, operator));

  return [question, answer];
};

export default () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }

  engine(rules, rounds);
};

import engine, { roundsCount } from '../index.js';
import generateRandNum from '../helpers/random-num.js';

export default () => {
  const rules = 'What is the result of the expression?';
  const rounds = [];
  const operators = ['+', '-', '*'];
  let firstNum = 0;
  let secondNum = 0;
  let question = '';

  for (let i = 0; i < roundsCount; i += 1) {
    firstNum = generateRandNum(1, 100);
    secondNum = generateRandNum(1, 100);
    const operator = operators[generateRandNum(0, operators.length)];
    question = `${firstNum} ${operator} ${secondNum}`;
    let answer = '';
    switch (operator) {
      case '+':
        answer = String(firstNum + secondNum);
        break;
      case '-':
        answer = String(firstNum - secondNum);
        break;
      case '*':
        answer = String(firstNum * secondNum);
        break;
      default:
        i -= 1;
    }
    if (answer !== '') {
      rounds.push([question, answer]);
    }
  }

  engine(rules, rounds);
};

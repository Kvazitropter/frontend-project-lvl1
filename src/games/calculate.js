import runGame from '../runGame.js';
import generateRounds from '../helpers/generateRounds.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const calculateResult = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Invalid operator');
  }
};

export default () => {
  const rules = 'What is the result of the expression?';

  const generateRound = () => {
    const operators = ['+', '-', '*'];
    const minNum = -50;
    const maxNum = 50;
    const operand1 = getRandomNumber(minNum, maxNum);
    const operand2 = getRandomNumber(minNum, maxNum);
    const operator = operators.at(getRandomNumber(0, (operators.length - 1)));
    const expected = calculateResult(operand1, operand2, operator);
    return [`${operand1} ${operator} ${operand2}`, expected.toString()];
  };

  runGame(rules, generateRounds(generateRound));
};

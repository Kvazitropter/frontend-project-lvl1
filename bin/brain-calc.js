#!/usr/bin/env node
import runGame from '../src/helpers/runGame.js';
import generateRounds from '../src/helpers/generateRounds.js';
import getRandomNumber from '../src/helpers/getRandomNumber.js';
import calculate from '../src/games/calculate.js';

const rules = 'What is the result of the expression?';

runGame(
  rules,
  generateRounds(
    () => {
      const operators = ['+', '-', '*'];
      const operand1 = getRandomNumber();
      const operand2 = getRandomNumber();
      const operator = operators.at(getRandomNumber(0, 2));
      const result = calculate(operand1, operand2, operator).toString();
      return [`${operand1} ${operator} ${operand2}`, result];
    },
  ),
);

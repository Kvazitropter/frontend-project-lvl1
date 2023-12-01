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
      const [min, max] = [-50, 50];
      const operand1 = getRandomNumber(min, max);
      const operand2 = getRandomNumber(min, max);
      const operator = operators.at(getRandomNumber(0, 2));
      const expResult = calculate(operand1, operand2, operator);
      return [`${operand1} ${operator} ${operand2}`, expResult.toString()];
    },
  ),
);

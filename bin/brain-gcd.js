#!/usr/bin/env node
import runGame from '../src/helpers/runGame.js';
import generateRounds from '../src/helpers/generateRounds.js';
import getRandomNumber from '../src/helpers/getRandomNumber.js';
import getGCD from '../src/games/getGCD.js';

const rules = 'Find the greatest common divisor of given numbers.';

runGame(
  rules,
  generateRounds(
    () => {
      const num1 = getRandomNumber();
      const num2 = getRandomNumber();
      const gcd = getGCD(num1, num2).toString();
      return [`${num1} ${num2}`, gcd];
    },
  ),
);

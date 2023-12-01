#!/usr/bin/env node
import runGame from '../src/helpers/runGame.js';
import generateRounds from '../src/helpers/generateRounds.js';
import getRandomNumber from '../src/helpers/getRandomNumber.js';
import isEven from '../src/games/isEven.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

runGame(
  rules,
  generateRounds(
    () => {
      const [min, max] = [0, 10000];
      const num = getRandomNumber(min, max);
      const parity = isEven(num) ? 'yes' : 'no';
      return [num, parity];
    },
  ),
);

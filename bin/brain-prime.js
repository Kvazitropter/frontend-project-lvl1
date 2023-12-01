#!/usr/bin/env node
import runGame from '../src/helpers/runGame.js';
import generateRounds from '../src/helpers/generateRounds.js';
import getRandomNumber from '../src/helpers/getRandomNumber.js';
import isPrime from '../src/games/isPrime.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

runGame(
  rules,
  generateRounds(
    () => {
      const number = getRandomNumber();
      const answer = isPrime(number) ? 'yes' : 'no';
      return [number, answer];
    },
  ),
);

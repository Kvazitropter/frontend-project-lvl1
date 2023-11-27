#!/usr/bin/env node
import runGame from '../src/helpers/runGame.js';
import generateRounds from '../src/helpers/generateRounds.js';
import getRandomNumber from '../src/helpers/getRandomNumber.js';
import getArProgrAndMember from '../src/games/getArProgrAndMember.js';

const rules = 'What number is missing in the progression?';

runGame(
  rules,
  generateRounds(
    () => {
      const pMinLength = 5;
      const pMaxLength = 10;
      const pLength = getRandomNumber(pMinLength, pMaxLength);
      const symbol = '..';
      const [progrArr, missing] = getArProgrAndMember(pLength, symbol);

      return [progrArr.join(' '), missing.toString()];
    },
  ),
);

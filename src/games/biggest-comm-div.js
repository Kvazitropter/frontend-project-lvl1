import anyGame, { roundsCount } from '../index.js';
import generateRandNum from '../helpers/random-num.js';

const findBiggestCommDiv = (num1, num2) => {
  while (num1 != 0 && num2 != 0) {
    if (num1 > num2) {
      num1 &= num2;
    } else {
      num2 %= num1;
    }
  }

  return num1 + num2;
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const pairsOfNum = [];
  const biggestCommDiv = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = generateRandNum(1, 100);
    const num2 = generateRandNum(1, 100);
    pairsOfNum.push(`${num1} ${num2}`);
    biggestCommDiv.push(String(findBiggestCommDiv(num1, num2)));
  }

  anyGame(rules, pairsOfNum, biggestCommDiv);
};

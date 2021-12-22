import anyGame, { roundsCount } from '../index.js';
import generateRandNum from '../helpers/random-num.js';

const findBiggestCommDiv = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return a + b;
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const rounds = [[], [], []];

  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = generateRandNum(1, 100);
    const num2 = generateRandNum(1, 100);
    rounds[i].push(`${num1} ${num2}`);
    rounds[i].push(String(findBiggestCommDiv(num1, num2)));
  }

  anyGame(rules, rounds);
};

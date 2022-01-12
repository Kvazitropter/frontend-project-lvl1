import engine, { roundsCount } from '../index.js';
import generateRandNum from '../helpers/random-num.js';

const rules = 'Find the greatest common divisor of given numbers.';

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

const generateRound = () => {
  const num1 = generateRandNum(1, 100);
  const num2 = generateRandNum(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(findBiggestCommDiv(num1, num2));

  return [question, answer];
};

export default () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }

  engine(rules, rounds);
};

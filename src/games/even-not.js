import engine, { roundsCount } from '../index.js';
import generateRandNum from '../helpers/random-num.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isPrime = (num) => {
  if (num % 2 === 0) {
    return true;
  }

  return false;
};

export default () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const question = generateRandNum(1, 1000);
    const answer = isPrime(question) ? 'yes' : 'no';
    rounds.push([question, answer]);
  }

  engine(rules, rounds);
};

import engine, { roundsCount } from '../index.js';
import generateRandNum from '../helpers/random-num.js';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const question = generateRandNum(1, 100);
    let answer = '';
    if (isPrime(question)) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    rounds.push([question, answer]);
  }

  engine(rules, rounds);
};

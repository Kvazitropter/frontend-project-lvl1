import engine, { roundsCount } from '../index.js';
import generateRandNum from '../helpers/random-num.js';

const rules = 'What number is missing in the progression?';

const generateRound = () => {
  const gap = '..';
  const progression = [];
  const count = generateRandNum(5, 10);
  let anyNum = generateRandNum(1, 100);
  const anyDiff = generateRandNum(1, 100);

  for (let u = 0; u < count; u += 1) {
    anyNum += anyDiff;
    progression.push(String(anyNum));
  }

  const indexOfLostNum = generateRandNum(0, progression.length);
  const lostNum = progression[indexOfLostNum];
  progression[indexOfLostNum] = gap;

  return [progression.join(' '), lostNum];
};

export default () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }

  engine(rules, rounds);
};

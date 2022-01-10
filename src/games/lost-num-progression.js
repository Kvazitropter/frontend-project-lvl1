import engine, { roundsCount } from '../index.js';
import generateRandNum from '../helpers/random-num.js';

const rules = 'What number is missing in the progression?';

const findLostNumOfProgression = () => {
  const rounds = [];
  const gap = '..';
  let progression = [];
  let count = 0;

  for (let i = 0; i < roundsCount; i += 1) {
    count = generateRandNum(5, 10);
    let anyNum = generateRandNum(1, 100);
    const anyDiff = generateRandNum(1, 100);
    for (let u = 0; u < count; u += 1) {
      anyNum += anyDiff;
      progression.push(String(anyNum));
    }
    const indexOfLostNum = generateRandNum(0, progression.length);
    const lostNum = progression[indexOfLostNum];
    progression[indexOfLostNum] = gap;
    rounds.push([progression.join(' '), lostNum]);
    progression = [];
  }

  engine(rules, rounds);
};
export default findLostNumOfProgression;

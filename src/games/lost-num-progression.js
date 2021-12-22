import anyGame, { roundsCount } from '../index.js';
import generateRandNum from '../helpers/random-num.js';

const findLostNumOfProgression = () => {
  const rules = 'What number is missing in the progression?';
  const rounds = [[], [], []];
  const gap = '..';
  const minCount = 5;
  const maxCount = 10;
  let progression = [];
  let count = 0;
  let anyNum = 0;
  let anyDiff = 0;

  for (let i = 0; i < roundsCount; i += 1) {
    count = generateRandNum(minCount, maxCount);
    anyNum = generateRandNum(1, 100);
    anyDiff = generateRandNum(1, 100);
    for (let u = 0; u < count; u += 1) {
      anyNum += anyDiff;
      progression.push(String(anyNum));
    }
    const lostNum = generateRandNum(0, progression.length - 1);
    rounds[i].unshift(progression[lostNum]);
    progression[lostNum] = gap;
    rounds[i].unshift(progression.join(' '));
    progression = [];
  }

  anyGame(rules, rounds);
};
export default findLostNumOfProgression;

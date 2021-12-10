import anyGame from '../index.js';

const findLostNumOfProgression = () => {
  const rules = 'What number is missing in the progression?';
  const answers = [];
  const progressions = [];
  const gap = '..';
  const minCount = 5;
  const maxCount = 10;
  let progression = [];
  let workNum = 0;
  let count = 0;
  let anyNum = 0;
  let anyDiff = 0;

  while (workNum < 3) {
    count = Math.floor(Math.random() * (maxCount - minCount)) + minCount;
    anyNum = Math.ceil(Math.random() * 100);
    anyDiff = Math.ceil(Math.random() * 100);
    for (let i = 0; i < count; i += 1) {
      anyNum += anyDiff;
      progression.push(String(anyNum));
    }
    const lostNum = Math.floor(Math.random() * progression.length);
    answers.push(progression[lostNum]);
    progression[lostNum] = gap;
    progressions.push(progression.join(' '));
    progression = [];
    workNum += 1;
  }

  anyGame(rules, progressions, answers);
};
export default findLostNumOfProgression;

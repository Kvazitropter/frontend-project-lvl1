import { anyGame } from './index.js';

export const findLostNumOfProgression = () => {
  const rules = 'What number is missing in the progression?';
  const answers = [];
  const progressions = [];
  const gap = '..';
  let progression = [];
  let workNum = 0;
  let count = 0;
  let anyNum = 0;
  let anyDiff = 0;

  while (workNum < 3) {
    count = Math.floor(Math.random() * 5) + 5;
    anyNum = Math.ceil(Math.random() * 100);
    anyDiff = Math.ceil(Math.random() * 100);
    for (let i = 0; i < count; i += 1) {
      anyNum += anyDiff;
      progression.push(String(anyNum));
    }
    let any = Math.floor(Math.random() * progression.length);
    answers.push(progression[any]);
    progression[any] = gap;
    progressions.push(progression.join(' '));
    progression = [];
    workNum += 1;
  }

  anyGame(rules, progressions, answers);
};


import { anyGame } from './index.js';

export const evenOrNotGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const numbers = [];
  const answers = [];
  let workNum = 0;

  while (workNum < 3) {
    let num = Math.ceil(Math.random() * 1000);
    numbers.push(num);
    if (num % 2 === 0) {
      answers.push('yes');
    } else {
      answers.push('no');
    }
    workNum += 1;
  }

  anyGame(rules, numbers, answers);
};

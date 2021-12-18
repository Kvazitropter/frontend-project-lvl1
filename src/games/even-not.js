import anyGame from '../index.js';
import { roundsCount } from '../index.js';
import generateRandNum from '../helpers/random-num.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const numbers = [];
  const answers = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const num = generateRandNum(1, 1000);
    numbers.push(num);
    if (num % 2 === 0) {
      answers.push('yes');
    } else {
      answers.push('no');
    }
  }

  anyGame(rules, numbers, answers);
};

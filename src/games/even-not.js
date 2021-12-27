import anyGame, { roundsCount } from '../index.js';
import generateRandNum from '../helpers/random-num.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const num = generateRandNum(1, 1000);
    let answer = '';
    if (num % 2 === 0) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    rounds.push([num, answer]);
  }

  anyGame(rules, rounds);
};

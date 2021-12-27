import anyGame, { roundsCount } from '../index.js';
import generateRandNum from '../helpers/random-num.js';

const findAllDivisors = (num) => {
  const arrayDiv = [];
  let div = num;

  while (div >= 1) {
    if (num % div === 0) {
      arrayDiv.push(div);
    }
    div -= 1;
  }

  return arrayDiv;
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const num = generateRandNum(1, 100);
    const divCount = findAllDivisors(num).length;
    let answer = '';
    if (divCount === 2) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    rounds.push([num, answer]);
  }

  anyGame(rules, rounds);
};

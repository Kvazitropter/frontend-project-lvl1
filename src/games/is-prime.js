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
  const rounds = [[], [], []];

  for (let i = 0; i < roundsCount; i += 1) {
    const num = generateRandNum(1, 100);
    rounds[i].push(num);
    const divCount = findAllDivisors(num).length;
    if (divCount === 2) {
      rounds[i].push('yes');
    } else {
      rounds[i].push('no');
    }
  }

  anyGame(rules, rounds);
};

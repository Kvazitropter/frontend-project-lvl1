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
  const numbers = [];
  const answers = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const num = generateRandNum(1, 1000);
    numbers.push(num);
    const divCount = findAllDivisors(num).length;
    if (divCount === 2) {
      answers.push('yes');
    } else {
      answers.push('no');
    }
  }

  anyGame(rules, numbers, answers);
};

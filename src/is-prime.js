import anyGame from './index.js';

export const findDivisors = (num) => {
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

export const isPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const numbers = [];
  const answers = [];
  let workNum = 0;

  while (workNum < 3) {
    const num = Math.ceil(Math.random() * 100);
    numbers.push(num);
    const divCount = findDivisors(num).length;
    if (divCount === 2) {
      answers.push('yes');
    } else {
      answers.push('no');
    }
    workNum += 1;
  }

  anyGame(rules, numbers, answers);
};

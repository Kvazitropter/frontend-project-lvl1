import runGame from '../runGame.js';
import generateRounds from '../helpers/generateRounds.js';
import getRandomNumber from '../helpers/getRandomNumber.js';
import getDivisors from '../helpers/getDivisors.js';

const calculateGcd = (num1, num2) => {
  const divisors1 = getDivisors(num1);
  const divisors2 = getDivisors(num2);
  const commonDivisors = divisors1.filter((div) => divisors2.includes(div));

  return commonDivisors.pop();
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const generateRound = () => {
    const minNum = 1;
    const num1 = getRandomNumber(minNum);
    const num2 = getRandomNumber(minNum);
    const gcd = calculateGcd(num1, num2);
    return [`${num1} ${num2}`, gcd.toString()];
  };

  runGame(rules, generateRounds(generateRound));
};

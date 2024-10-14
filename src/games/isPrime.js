import runGame from '../runGame.js';
import generateRounds from '../helpers/generateRounds.js';
import getRandomNumber from '../helpers/getRandomNumber.js';
import getDivisors from '../helpers/getDivisors.js';

const isPrime = (number) => number > 0 && getDivisors(number).length === 2;

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateRound = () => {
    const num = getRandomNumber();
    const answer = isPrime(num) ? 'yes' : 'no';
    return [num, answer];
  };

  runGame(rules, generateRounds(generateRound));
};

import runGame from '../runGame.js';
import generateRounds from '../helpers/generateRounds.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRound = () => {
    const minNum = 0;
    const maxNum = 10000;
    const num = getRandomNumber(minNum, maxNum);
    const parity = num % 2 === 0 ? 'yes' : 'no';
    return [num, parity];
  };

  runGame(rules, generateRounds(generateRound));
};

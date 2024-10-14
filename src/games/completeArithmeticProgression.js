import runGame from '../runGame.js';
import generateRounds from '../helpers/generateRounds.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const getProgressionAndMember = (length, replacement) => {
  const firstMember = getRandomNumber();
  const diff = getRandomNumber();
  const randomIndex = getRandomNumber(0, length - 1);
  const progression = [];

  for (let n = 0; n < length; n += 1) {
    progression.push(firstMember + diff * n);
  }

  const missingMember = progression[randomIndex];
  progression[randomIndex] = replacement;

  return [progression, missingMember];
};

export default () => {
  const rules = 'What number is missing in the progression?';

  const generateRound = () => {
    const symbol = '..';
    const minLength = 5;
    const maxLength = 10;
    const length = getRandomNumber(minLength, maxLength);
    const [progression, missingNum] = getProgressionAndMember(length, symbol);
    return [progression.join(' '), missingNum.toString()];
  };

  runGame(rules, generateRounds(generateRound));
};

import getRandomNumber from '../helpers/getRandomNumber.js';

export default (length, replacement) => {
  const firstEl = getRandomNumber();
  const diff = getRandomNumber();
  const missingPosition = getRandomNumber(0, length - 1);
  const progression = [];

  for (let n = 0; n < length; n += 1) {
    progression.push(firstEl + diff * n);
  }

  const missingMember = progression[missingPosition];
  progression[missingPosition] = replacement;

  return [progression, missingMember];
};

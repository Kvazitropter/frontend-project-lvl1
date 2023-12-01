import getAllDivisors from '../helpers/getDivisors.js';

export default (num) => {
  if (num <= 0) { return false; }

  return getAllDivisors(num).length === 2;
};

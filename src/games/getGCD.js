import getDivisors from '../helpers/getDivisors.js';

export default (num1, num2) => {
  const divisors1 = getDivisors(num1);
  const divisors2 = getDivisors(num2);
  const commonDivisors = divisors1.filter((div) => divisors2.includes(div));

  return commonDivisors.pop();
};

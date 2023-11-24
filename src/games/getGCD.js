const getAllDivisors = (num) => {
  const divisors = [1];

  for (let div = 2; div < num / 2; div += 1) {
    if (num % div === 0) { divisors.push(div); }
  }

  divisors.push(num);

  return divisors;
};

export default (num1, num2) => {
  const divisors1 = getAllDivisors(num1);
  const divisors2 = getAllDivisors(num2);
  const commonDivisors = divisors1.filter((div) => divisors2.includes(div));

  return commonDivisors.pop();
};

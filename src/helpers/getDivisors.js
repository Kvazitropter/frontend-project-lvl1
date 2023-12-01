export default (num) => {
  if (num === 0) { return null; }

  const divisors = [];

  for (let div = 1; div <= num / 2; div += 1) {
    if (num % div === 0) { divisors.push(div); }
  }

  divisors.push(num);

  return divisors;
};

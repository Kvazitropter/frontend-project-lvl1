export default (num) => {
  if (num <= 1) { return false; }

  for (let div = 2; div < num / 2; div += 1) {
    if (num % div === 0) { return false; }
  }

  return true;
};

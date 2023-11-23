export default (generateRound, amount = 3) => {
  const result = [];

  for (let i = 1; i <= amount; i += 1) {
    result.push(generateRound());
  }

  return result;
};

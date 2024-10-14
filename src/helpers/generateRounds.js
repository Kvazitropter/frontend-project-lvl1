export default (generateRound, count = 3) => {
  const result = [];

  for (let i = 1; i <= count; i += 1) {
    result.push(generateRound());
  }

  return result;
};

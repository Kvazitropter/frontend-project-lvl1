export default (num1, num2, operator) => {
  const [plus, minus, multiply] = ['+', '-', '*'];

  switch (operator) {
    case plus:
      return num1 + num2;
    case minus:
      return num1 - num2;
    case multiply:
      return num1 * num2;
    default:
      throw new Error('Invalid operator');
  }
};

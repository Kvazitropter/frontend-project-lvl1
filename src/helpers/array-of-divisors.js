export default (num) => {
  const arrayDiv = [];
  let div = num;

  while (div >= 1) {
    if (num % div === 0) {
      arrayDiv.push(div);
    }
    div -= 1;
  }

  return arrayDiv;
};

export default (num1, num2) => {
  const arrayDiv1 = [];
  const arrayDiv2 = [];
  let div1 = num1;
  let div2 = num2;
  let biggestCommDiv = 0;

  while (div1 >= 1 || div2 >= 1) {
    if (num1 % div1 === 0) {
      arrayDiv1.push(div1);
    }
    if (num2 % div2 === 0) {
      arrayDiv2.push(div2);
    }
    div1 -= 1;
    div2 -= 1;
  }

  for (let i = 0; i < arrayDiv1.length; i += 1) {
    if (arrayDiv2.includes(arrayDiv1[i])) {
      biggestCommDiv = arrayDiv1[i];
      break;
    }
  }

  return biggestCommDiv;
};

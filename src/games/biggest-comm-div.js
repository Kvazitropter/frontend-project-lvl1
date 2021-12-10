import anyGame from '../index.js';

export const findBiggestCommDiv = (num1, num2) => {
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

export const biggestCommDivGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const pairsOfNum = [];
  const biggestCommDiv = [];
  let workNum = 0;

  while (workNum < 3) {
    const num1 = Math.ceil(Math.random() * 100);
    const num2 = Math.ceil(Math.random() * 100);
    pairsOfNum.push(`${num1} ${num2}`);
    biggestCommDiv.push(String(findBiggestCommDiv(num1, num2)));
    workNum += 1;
  }

  anyGame(rules, pairsOfNum, biggestCommDiv);
};

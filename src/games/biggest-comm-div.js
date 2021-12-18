import anyGame from '../index.js';
import { roundsCount } from '../index.js';
import generateRandNum from '../helpers/random-num.js';
import findBiggestCommDiv from '../helpers/find-biggest-comm-div.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const pairsOfNum = [];
  const biggestCommDiv = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = Math.ceil(Math.random() * 100);
    const num2 = Math.ceil(Math.random() * 100);
    pairsOfNum.push(`${num1} ${num2}`);
    biggestCommDiv.push(String(findBiggestCommDiv(num1, num2)));
  }

  anyGame(rules, pairsOfNum, biggestCommDiv);
};

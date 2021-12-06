import readlineSync from 'readline-sync';

export const evenOrNotGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ').trim();
  console.log(`Hello, ${name}!`);

  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  let workNum = 1;
  let num = 0;
  let isEven = '';

  console.log(rules);

  while (workNum <= 3) {
    num = Math.ceil(Math.random() * 100);
    console.log(`Question: ${num}`);
    if (num % 2 === 0) {
      isEven = 'yes';
    } else {
      isEven = 'no';
    }
    const answer = readlineSync.question('Your answer: ').trim();
    if (isEven === answer) {
      console.log('Correct!');
      workNum += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  
  if (workNum === 4) {
    console.log(`Congratulations, ${name}!`);
  }
};

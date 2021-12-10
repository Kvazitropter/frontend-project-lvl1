import readlineSync from 'readline-sync';

const anyGame = (rules, questions, rightAnswers) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ').trim();
  console.log(`Hello, ${name}!`);

  let workNum = 0;

  console.log(rules);

  while (workNum < 3) {
    console.log(`Question: ${questions[workNum]}`);
    const answer = readlineSync.question('Your answer: ').trim();
    if (rightAnswers[workNum] === answer) {
      console.log('Correct!');
      workNum += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswers[workNum]}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (workNum === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default anyGame;

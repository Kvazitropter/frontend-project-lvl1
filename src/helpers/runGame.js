import readlineSync from 'readline-sync';

export default (rules, rounds) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  let userAnswer;

  return rounds.every(([question, answer]) => {
    console.log(`Question: ${question}`);
    userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
      return true;
    }

    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }) && console.log(`Congratulations, ${name}!`);
};

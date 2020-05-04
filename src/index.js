import readlineSync from 'readline-sync';

const numberOfGameRounds = 3;

const runGame = (message, dataGenerationFunc) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(message);
  for (let i = 0; i < numberOfGameRounds; i += 1) {
    const { questionData, rightAnswer } = dataGenerationFunc();
    console.log(`Question: ${questionData}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;

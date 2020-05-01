import readlineSync from 'readline-sync';

export const hello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const numberOfGameRounds = 3;

export const runGame = (message, dataGenerationFunc) => {
  const name = hello();
  console.log(message);
  for (let i = 0; i < numberOfGameRounds; i += 1) {
    const { questionData, rightAnswer } = dataGenerationFunc();
    console.log(`Question: ${questionData}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer.toString() !== rightAnswer.toString()) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

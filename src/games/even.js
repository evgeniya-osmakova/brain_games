import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const genRoundData = () => {
  const question = generateRandomNumber(0, 100).toString();
  const rightAnswer = (isEven(question)) ? 'yes' : 'no';
  return { question, rightAnswer };
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => {
  runGame(task, genRoundData);
};

export default runEvenGame;

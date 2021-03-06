import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const genRoundData = () => {
  const number = generateRandomNumber(0, 100);
  const question = number.toString();
  const rightAnswer = (isEven(number)) ? 'yes' : 'no';
  return { question, rightAnswer };
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => {
  runGame(task, genRoundData);
};

export default runEvenGame;

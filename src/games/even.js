import { runGame } from '../index.js';

const generateData = () => {
  const questionData = Math.floor(Math.random() * 100) + 1;
  const rightAnswer = (questionData % 2 === 0) ? 'yes' : 'no';
  return { questionData, rightAnswer };
};

const runEvenGame = () => {
  const message = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(message, generateData);
};

export default runEvenGame;

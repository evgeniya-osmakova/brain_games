import { runGame } from '../index.js';

const upperBoundForNumberGeneration = 100;

const generateData = () => {
  const questionData = Math.floor(Math.random() * upperBoundForNumberGeneration);
  const rightAnswer = (questionData % 2 === 0) ? 'yes' : 'no';
  return { questionData, rightAnswer };
};

const runEvenGame = () => {
  const message = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(message, generateData);
};

export default runEvenGame;

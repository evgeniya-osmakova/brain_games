import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const upperBoundForNumberGeneration = 100;

const isEven = (number) => number % 2 === 0;

const generateData = () => {
  const questionData = generateRandomNumber(upperBoundForNumberGeneration);
  const rightAnswer = (isEven(questionData)) ? 'yes' : 'no';
  return { questionData, rightAnswer };
};

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => {
  runGame(message, generateData);
};

export default runEvenGame;

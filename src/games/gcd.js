import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const findRightAnswer = (number1, number2) => {
  let min = Math.min(number1, number2);
  const max = Math.max(number1, number2);
  if (max % min === 0) {
    return min;
  }
  let diff = max - min;
  while (diff !== min) {
    const temporaryMin = Math.min(diff, min);
    diff = Math.abs(diff - min);
    min = temporaryMin;
  }
  return min;
};

const upperBoundForNumberGeneration = 10;

const generateData = () => {
  const number1 = generateRandomNumber(upperBoundForNumberGeneration);
  const number2 = generateRandomNumber(upperBoundForNumberGeneration);
  const questionData = `${number1} ${number2}`;
  const rightAnswer = findRightAnswer(number1, number2);
  return { questionData, rightAnswer: rightAnswer.toString() };
};

const message = 'Find the greatest common divisor of given numbers.';

const runGcdGame = () => {
  runGame(message, generateData);
};

export default runGcdGame;

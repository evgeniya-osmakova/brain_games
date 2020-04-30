import { runGame } from '../index.js';

const findRightAnswer = (number1, number2) => {
  let min = Math.min(number1, number2);
  const max = Math.max(number1, number2);
  if (max % min === 0) {
    return min;
  }
  let diff = Math.abs(max - min);
  while (diff % min !== 0) {
    diff = Math.abs(diff - min);
    min = Math.min(diff, min);
  }
  return min;
};

const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const generateData = () => {
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  const questionData = `${randomNumber1} ${randomNumber2}`;
  const rightAnswer = findRightAnswer(randomNumber1, randomNumber2);
  return { questionData, rightAnswer };
};

const runGcdGame = () => {
  const message = 'Find the greatest common divisor of given numbers.';
  runGame(message, generateData);
};

export default runGcdGame;

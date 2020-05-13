import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const getGCD = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGCD(number2, number1 % number2);
};

const genRoundData = () => {
  const number1 = generateRandomNumber(0, 50);
  const number2 = generateRandomNumber(0, 50);
  const question = `${number1} ${number2}`;
  const rightAnswer = getGCD(number1, number2).toString();
  return { question, rightAnswer };
};

const task = 'Find the greatest common divisor of given numbers.';

const runGcdGame = () => {
  runGame(task, genRoundData);
};

export default runGcdGame;

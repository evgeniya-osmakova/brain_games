import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const getGCD = (number1, number2) => {
  if (number1 === 0) {
    return number2;
  }
  if (number2 === 0) {
    return number1;
  }
  if (number1 === number2) {
    return number1;
  }
  let copyNumber1 = number1;
  let copyNumber2 = number2;
  do {
    const min = Math.min(copyNumber1, copyNumber2);
    const diff = Math.abs(copyNumber1 - copyNumber2);
    copyNumber1 = min;
    copyNumber2 = diff;
  } while (copyNumber1 !== copyNumber2);
  return copyNumber1.toString();
};

const genRoundData = () => {
  const number1 = generateRandomNumber(0, 50);
  const number2 = generateRandomNumber(0, 50);
  const question = `${number1} ${number2}`;
  const rightAnswer = getGCD(number1, number2);
  return { question, rightAnswer };
};

const task = 'Find the greatest common divisor of given numbers.';

const runGcdGame = () => {
  runGame(task, genRoundData);
};

export default runGcdGame;

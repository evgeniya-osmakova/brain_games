import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const mathOperations = ['+', '-', '*'];

const calculateNumbers = (number1, number2, mathOperation) => {
  switch (mathOperation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Operation not found: '${mathOperation}'`);
  }
};

const genRoundData = () => {
  const number1 = generateRandomNumber(1, 10);
  const number2 = generateRandomNumber(1, 10);
  const mathOperationIndex = generateRandomNumber(0, mathOperations.length - 1);
  const mathOperation = mathOperations[mathOperationIndex];
  const question = `${number1} ${mathOperation} ${number2}`;
  const rightAnswer = calculateNumbers(number1, number2, mathOperation).toString();
  return { question, rightAnswer };
};

const task = 'What is the result of the expression?';

const runCalcGame = () => {
  runGame(task, genRoundData);
};

export default runCalcGame;

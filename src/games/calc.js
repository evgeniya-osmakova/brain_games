import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const mathOperations = ['+', '-', '*'];

const findRightAnswer = (number1, number2, mathOperation) => {
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

const upperBoundForNumberGeneration = 10;

const generateData = () => {
  const number1 = generateRandomNumber(upperBoundForNumberGeneration);
  const number2 = generateRandomNumber(upperBoundForNumberGeneration);
  const mathOperationIndex = generateRandomNumber(mathOperations.length);
  const mathOperation = mathOperations[mathOperationIndex];
  const questionData = `${number1} ${mathOperation} ${number2}`;
  const rightAnswer = findRightAnswer(number1, number2, mathOperation);
  return { questionData, rightAnswer: rightAnswer.toString() };
};

const message = 'What is the result of the expression?';

const runCalcGame = () => {
  runGame(message, generateData);
};

export default runCalcGame;

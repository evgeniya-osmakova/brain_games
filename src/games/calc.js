import { runGame } from '../index.js';

const mathOperations = ['+', '-', '*'];

const findRightAnswer = (number1, number2, mathOperation) => {
  let rightAnswer;
  switch (mathOperation) {
    case '+':
      rightAnswer = number1 + number2;
      break;
    case '-':
      rightAnswer = number1 - number2;
      break;
    case '*':
      rightAnswer = number1 * number2;
      break;
    default:
      break;
  }
  return rightAnswer;
};

const generateRandomNumber = (upperBound) => Math.floor(Math.random() * upperBound);

const generateData = () => {
  const upperBound = 10;
  const randomNumber1 = generateRandomNumber(upperBound);
  const randomNumber2 = generateRandomNumber(upperBound);
  const randomMathOperationIndex = generateRandomNumber(mathOperations.length);
  const randomMathOperation = mathOperations[randomMathOperationIndex];
  const questionData = `${randomNumber1} ${randomMathOperation} ${randomNumber2}`;
  const rightAnswer = findRightAnswer(randomNumber1, randomNumber2, randomMathOperation);
  return { questionData, rightAnswer };
};

const runCalcGame = () => {
  const message = 'What is the result of the expression?';
  runGame(message, generateData);
};

export default runCalcGame;

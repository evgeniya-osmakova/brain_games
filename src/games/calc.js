import { gameSteps } from '../index.js';

const dataGeneration = () => {
  const mathOperations = ['+', '-', '*'];
  const randomNumber1 = Math.floor(Math.random() * 10) + 1;
  const randomNumber2 = Math.floor(Math.random() * 10) + 1;
  const randomMathOperationIndex = Math.floor(Math.random() * mathOperations.length);
  const randomMathOperation = mathOperations[randomMathOperationIndex];
  const questionData = `${randomNumber1} ${randomMathOperation} ${randomNumber2}`;
  let rightAnswer;
  switch (randomMathOperation) {
    case '+':
      rightAnswer = randomNumber1 + randomNumber2;
      break;
    case '-':
      rightAnswer = randomNumber1 - randomNumber2;
      break;
    case '*':
      rightAnswer = randomNumber1 * randomNumber2;
      break;
    default:
      break;
  }
  return { questionData, rightAnswer };
};

const runCalcGame = () => {
  const message = 'What is the result of the expression?';
  gameSteps(message, dataGeneration);
};

export default runCalcGame;

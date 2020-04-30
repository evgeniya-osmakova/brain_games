import { runGame } from '../index.js';

const progresionLength = 10;

const generateProgression = (step, beginning, missedIndex) => {
  let questionData = `${beginning}`;
  let currentNumber = beginning;
  let rightAnswer;
  for (let i = 1; i < progresionLength; i += 1) {
    currentNumber += step;
    if (i === missedIndex) {
      questionData = `${questionData} ..`;
      rightAnswer = currentNumber;
    } else {
      questionData = `${questionData} ${currentNumber}`;
    }
  }
  return { rightAnswer, questionData };
};

const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const generateData = () => {
  const progressionStep = generateRandomNumber();
  const progressionBeginning = generateRandomNumber();
  const missedIndex = generateRandomNumber();
  const { questionData, rightAnswer } = generateProgression(progressionStep, progressionBeginning, missedIndex);
  return { questionData, rightAnswer };
};

const runProgressionGame = () => {
  const message = 'What number is missing in the progression?';
  runGame(message, generateData);
};

export default runProgressionGame;

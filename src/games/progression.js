import { runGame } from '../index.js';

const progressionLength = 10;

const generateProgression = (step, beginning, missedIndex) => {
  let questionData = `${beginning}`;
  let currentNumber = beginning;
  let rightAnswer;
  for (let i = 1; i < progressionLength; i += 1) {
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

const upperBoundForNumberGeneration = 10;

const generateRandomNumber = () => Math.floor(Math.random() * upperBoundForNumberGeneration);

const generateData = () => {
  const progressionStep = generateRandomNumber();
  const progressionBeginning = generateRandomNumber();
  const missedIndex = generateRandomNumber();
  const { questionData, rightAnswer } = generateProgression(
    progressionStep, progressionBeginning, missedIndex,
  );
  return { questionData, rightAnswer };
};

const runProgressionGame = () => {
  const message = 'What number is missing in the progression?';
  runGame(message, generateData);
};

export default runProgressionGame;

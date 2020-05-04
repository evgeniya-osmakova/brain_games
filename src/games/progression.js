import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

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

const generateData = () => {
  const progressionStep = generateRandomNumber(upperBoundForNumberGeneration);
  const progressionBeginning = generateRandomNumber(upperBoundForNumberGeneration);
  const missedIndex = generateRandomNumber(upperBoundForNumberGeneration);
  const { questionData, rightAnswer } = generateProgression(
    progressionStep, progressionBeginning, missedIndex,
  );
  return { questionData, rightAnswer: rightAnswer.toString() };
};

const message = 'What number is missing in the progression?';

const runProgressionGame = () => {
  runGame(message, generateData);
};

export default runProgressionGame;

import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const progressionLength = 10;

const generateProgression = (step, beginning) => {
  const questionData = [beginning];
  let currentNumber = beginning;
  for (let i = 1; i < progressionLength; i += 1) {
    currentNumber += step;
    questionData.push(currentNumber);
  }
  return questionData;
};

const genRoundData = () => {
  const progressionStep = generateRandomNumber(1, 10);
  const progressionBeginning = generateRandomNumber(1, 20);
  const missedIndex = generateRandomNumber(0, 9);
  const progression = generateProgression(progressionStep, progressionBeginning);
  const rightAnswer = progression[missedIndex].toString();
  progression[missedIndex] = '..';
  const question = progression.join(' ');
  return { question, rightAnswer };
};

const task = 'What number is missing in the progression?';

const runProgressionGame = () => {
  runGame(task, genRoundData);
};

export default runProgressionGame;

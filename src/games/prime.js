import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const upperBoundForNumberGeneration = 100;

const generateData = () => {
  const questionData = generateRandomNumber(upperBoundForNumberGeneration);
  const rightAnswer = (isPrime(questionData)) ? 'yes' : 'no';
  return { questionData, rightAnswer };
};

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runPrimeGame = () => {
  runGame(message, generateData);
};

export default runPrimeGame;

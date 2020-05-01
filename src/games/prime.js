import { runGame } from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const upperBoundForNumberGeneration = 100;

const generateRandomNumber = () => Math.floor(Math.random() * upperBoundForNumberGeneration);

const generateData = () => {
  const questionData = generateRandomNumber();
  const resultOfPrimeCheck = isPrime(questionData);
  const rightAnswer = (resultOfPrimeCheck) ? 'yes' : 'no';
  return { questionData, rightAnswer };
};

const runPrimeGame = () => {
  const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(message, generateData);
};

export default runPrimeGame;

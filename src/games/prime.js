import { runGame } from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const generateData = () => {
  const questionData = generateRandomNumber();
  const resultOfPrimeChek = isPrime(questionData);
  const rightAnswer = (resultOfPrimeChek) ? 'yes' : 'no';
  return { questionData, rightAnswer };
};

const runPrimeGame = () => {
  const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(message, generateData);
};

export default runPrimeGame;

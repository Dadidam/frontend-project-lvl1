import readlineSync from 'readline-sync';

export default () => {
  // Wait for user's response.
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

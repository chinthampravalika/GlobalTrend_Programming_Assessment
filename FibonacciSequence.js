//7)Write a function that generates the first n numbers of the Fibonacci sequence.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateFibonacci(n) {
  const fibonacciSequence = [0, 1]; // Initialize the sequence with the first two Fibonacci numbers

  // Generate subsequent Fibonacci numbers
  for (let i = 2; i < n; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  }

  return fibonacciSequence.slice(0, n); 
}

function processUserInput() {
  rl.question('Enter the number of Fibonacci numbers to generate: ', (input) => {
    const n = parseInt(input);

    if (isNaN(n) || n <= 0) {
      console.log('Invalid input. Please enter a positive integer greater than 0.');
      rl.close();
      return;
    }

    const fibonacciNumbers = generateFibonacci(n);
    console.log(`First ${n} Fibonacci numbers:`, fibonacciNumbers);

    rl.close();
  });
}

// Call the function
processUserInput();
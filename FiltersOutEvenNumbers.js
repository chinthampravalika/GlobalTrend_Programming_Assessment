//9)Write a function that filters out even numbers from an array.


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}

function processUserInput() {
  rl.question('Enter elements of the array (comma-separated): ', (input) => {
    // Convert input to array of numbers
    const arr = input.split(',').map(item => Number(item.trim()));

    // Filter out even numbers
    const filteredArray = filterEvenNumbers(arr);

    console.log('Original array:', arr);
    console.log('Array with even numbers filtered out:', filteredArray);

    rl.close();
  });
}

// Call the function 
processUserInput();
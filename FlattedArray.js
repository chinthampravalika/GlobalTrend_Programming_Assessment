//4)Write a function that checks if two given strings are anagrams of each other.


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function flattenArray(nestedArray) {
  let flatArray = [];

  nestedArray.forEach(element => {
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(flattenArray(element));
    } else {
      flatArray.push(element);
    }
  });

  return flatArray;
}

function processUserInput() {
  rl.question('Enter a nested array (e.g., [[1, 2], [3, [4]], 5]): ', (answer) => {
    try {
      const userInput = JSON.parse(answer); // Assuming user enters a valid JSON array
      const flattenedArray = flattenArray(userInput);
      console.log('Flattened array:', flattenedArray);
    } catch (error) {
      console.error('Invalid input. Please enter a valid nested array.');
    } finally {
      rl.close();
    }
  });
}

// Call the function to start processing user input
processUserInput();
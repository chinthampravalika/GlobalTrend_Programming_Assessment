
//5)Write a function that takes an array and returns a new array with duplicates removed.


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function removeDuplicates(arr) {
  // Using a Set to store unique elements
  const uniqueArray = [...new Set(arr)];
  return uniqueArray;
}

function processUserInput() {
  rl.question('Enter elements of the array (comma-separated): ', (input) => {
    const arr = input.split(',').map(item => item.trim());

    // Remove duplicates
    const uniqueArray = removeDuplicates(arr);

    console.log('Original array:', arr);
    console.log('Array with duplicates removed:', uniqueArray);

    rl.close();
  });
}

// Call the function to start processing user input
processUserInput();
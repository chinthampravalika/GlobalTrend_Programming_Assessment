//6)Write a function that takes a string and capitalizes the first letter of each word in the string.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function capitalizeWords(str) {
  return str.replace(/\b\w/g, match => match.toUpperCase());
}

function processUserInput() {
  rl.question('Enter a sentence: ', (input) => {
    const capitalizedString = capitalizeWords(input);

    console.log('Original sentence:', input);
    console.log('Capitalized sentence:', capitalizedString);

    rl.close();
  });
}

// Call the function
processUserInput();
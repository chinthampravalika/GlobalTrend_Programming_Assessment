//10)Write a function that converts a given string to title case (capitalizing the first letter of each word).

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function processUserInput() {
  rl.question('Enter a string to convert to title case: ', (input) => {
    const titleCaseString = toTitleCase(input);
    console.log('Original string:', input);
    console.log('String in title case:', titleCaseString);
    rl.close();
  });
}

// Call the function 
processUserInput();

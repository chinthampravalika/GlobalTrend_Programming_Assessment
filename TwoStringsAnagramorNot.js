
//4)Write a function that checks if two given strings are anagrams of each other.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function areAnagrams(str1, str2) {
    // Remove any non-alphanumeric characters and convert to lowercase
    const normalize = str => str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);

    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    // Sort the characters of the strings and compare
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

function processUserInput() {
  rl.question('Enter the first string: ', (str1) => {
    rl.question('Enter the second string: ', (str2) => {
      const result = areAnagrams(str1, str2);
      console.log(`Are "${str1}" and "${str2}" anagrams? ${result}`);
      rl.close();
    });
  });
}

// Call the function
processUserInput();
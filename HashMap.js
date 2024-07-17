//8)Implement a simple HashMap class with put, get, and remove methods.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class HashMap {
  constructor() {
    this.map = {};
  }

  put(key, value) {
    this.map[key] = value;
  }

  get(key) {
    return this.map[key];
  }

  remove(key) {
    if (this.map.hasOwnProperty(key)) {
      delete this.map[key];
    }
  }

  keys() {
    return Object.keys(this.map);
  }
}

function processUserInput() {
  const hashMap = new HashMap();

  rl.question('Enter key-value pairs (key:value) or type "done" to finish: \n', (input) => {
    const pairs = input.trim().split(',');

    pairs.forEach(pair => {
      const [key, value] = pair.split(':');
      if (key && value) {
        hashMap.put(key.trim(), value.trim());
      }
    });

    console.log('HashMap:', hashMap);

    rl.question('Enter a key to get its value (or type "done" to finish): ', (keyInput) => {
      if (keyInput === 'done') {
        rl.close();
      } else {
        const value = hashMap.get(keyInput.trim());
        console.log(`Value for key '${keyInput}':name:value`);
        processUserInput(); // Continue processing input
      }
    });
  });
}

// Start processing user input
processUserInput();
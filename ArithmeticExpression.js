// 2)Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result.

function evaluateExpression(userInput) {
    // Remove any whitespace from the expression
    userInput = userInput.replace('');
    
    // Use regular expression to split the expression operators
    let operators = userInput.match(/[-+]?[0-9]+/g);
    let result = 0;
  
    //iterate each element by using forEach method
    operators.forEach(operator => {
      result += parseInt(operator);
    });
  
    return result;
  }
  
  // Prompt the user to enter an arithmetic expression
  let values = prompt("Enter a simple arithmetic expression (only addition and subtraction):");
  
  // display the result
  let result = evaluateExpression(inputField);
  console.log("The result is:", result);
  
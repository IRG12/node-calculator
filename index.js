let readlineSync = require("readline-sync");

// 1.) Ask the user, "What operation would you like to perform?"
// 2.) Then the user enters one of these options: "/" "*" "-" "+"
// 3.) If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
// 4.) After the user enters a valid operation, ask the user, "Please enter the first number"
// 5.) The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// 6.) After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// 7.) Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result

// prompt the name question
// Wait for user's response.
let userName = readlineSync.question("May I have your name? ");
console.log("Hi " + userName + "!");

//

let operations = [];
let whatOperation = readlineSync.question(
  `What operation would you like to perform ${userName}? `
);
// console.log(whatOperation);
operations.push(whatOperation);
console.log(operations);

for (let op of operations) {
  switch (op) {
    case "/":
      console.log("Division it is!");
      break;
    case "*":
      console.log("multiplication it is!");
      break;
    case "+":
      console.log("addition it is!");
      break;
    case "-":
      console.log("subtraction it is!");
      break;
    default:
      console.log(
        `Sorry, ${op} is an invalid operation. Please enter one of the following: '/', '*', '+', '-'.`
      );
  }
}

integers = [];
let firstInt = readlineSync.questionInt(`Please enter the first number. `);
console.log(firstInt);
integers.push(firstInt);

for (let int of integers) {
  if (Number.isInteger(parseInt(int))) {
    console.log("This is an integer");
  } else {
    console.log("Invalid input. Please input an integer.");
  }
}

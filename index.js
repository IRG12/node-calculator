var readlineSync = require("readline-sync");

// prompt the name question
// 1.) Ask the user, "What operation would you like to perform?"
// 2.) Then the user enters one of these options: "/" "*" "-" "+"
// 3.) If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
// 4.) After the user enters a valid operation, ask the user, "Please enter the first number"
// 5.) The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// 6.) After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// 7.) Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result

// Wait for user's response.
// prompt the name question
var userName = readlineSync.question("May I have your name? ");
console.log("Hi " + userName + "!");

//

var whatOperation = readlineSync.question(
  "What operation would you like to perform? "
);
console.log(whatOperation);

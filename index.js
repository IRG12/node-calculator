let readlineSync = require("readline-sync");

// 1.) Ask the user, "What operation would you like to perform?"
// 2.) Then the user enters one of these options: "/" "*" "-" "+"
// 3.) If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
// 4.) After the user enters a valid operation, ask the user, "Please enter the first number"
// 5.) The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// 6.) After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// 7.) Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result

const getOperation = (val) => {
  const operation = readlineSync.question(`What would you like to perform? `);
  if (
    operation === "+" ||
    operation === "-" ||
    operation === "*" ||
    operation === "/"
  ) {
    return operation;
  } else {
    return getOperation(val);
  }
};
let selectedOperation = getOperation();

let val1;
let val2;

const getNumber = (val1, val2) => {
  const firstNum = isNaN(val1)
    ? readlineSync.questionInt(`Please enter the first number. `)
    : getNumber(val1, val2);

  const secondNum = isNaN(val2)
    ? readlineSync.questionInt(`Please enter the second number. `)
    : getNumber(val2);

  return [firstNum, secondNum];
};

const [firstInt, secondInt] = getNumber(val1, val2);

const calculate = (f, s, o) => {
  switch (o) {
    case "/":
      return f / s;
    case "*":
      return f * s;
    case "+":
      return f + s;
    case "-":
      return f - s;
  }
};

console.log(
  `${firstInt} ${selectedOperation} ${secondInt} =`,
  calculate(firstInt, secondInt, selectedOperation)
);

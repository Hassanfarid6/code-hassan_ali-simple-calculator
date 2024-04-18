#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    name: "operator",
    type: "list",
    message: "select one of the operators to perform the operation",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);

} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);

} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);

} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);


} else {
  console.log("please select a valid operator");
}

 
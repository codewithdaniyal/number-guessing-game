#! usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to CodeWithDaniyal - CLI Number Guessing Game");
const randomnumber = Math.floor(Math.random() * 1 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter Your Guess Number(Number Limit From 1 to 10)",
    },
]);
if (answers.userGuessedNumber == randomnumber) {
    console.log("You Won");
}
else {
    console.log("You Lost");
}

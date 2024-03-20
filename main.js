#! /usr/bin/env node
import inquirer from "inquirer";
let Result = await inquirer.prompt([
    {
        message: "Please input First Number = ",
        type: "number",
        name: "First_Number",
    },
    {
        message: "Please input Second Number = ",
        type: "number",
        name: "Second_Number",
    },
    {
        message: " What Operation do you want to perform, Please select : ",
        type: "list",
        name: "Operator",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Square",
            "Modulus",
        ],
    },
]);
// Conditional Statements:
if (Result.Operator === "Addition") {
    console.log(" The Sum Of Two Numbers Are = ", (Result.First_Number + Result.Second_Number));
}
else if (Result.Operator === "Subtraction") {
    console.log(" The Subtraction Of Two Numbers Are = ", (Result.First_Number - Result.Second_Number));
}
else if (Result.Operator === "Multiplication") {
    console.log(" The Product Of Two Numbers Are = ", (Result.First_Number * Result.Second_Number));
}
else if (Result.Operator === "Division") {
    console.log(" The Divition Of Two Numbers Are = ", (Result.First_Number / Result.Second_Number));
}
else if (Result.Operator === "Square") {
    console.log(" The Square Of First Number is  = ", (Result.First_Number ** 2));
    console.log(" The Square Of Second Number is  = ", (Result.Second_Number ** 2));
}
else if (Result.Operator === "Modulus") {
    console.log(" The Remainder Of Two Numbers Are = ", (Result.First_Number % Result.Second_Number));
}
else {
    console.log(" Invalid Operator... !! ");
}

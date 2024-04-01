import inquirer from "inquirer";
let myBalance = 1000;
let myPin = 12345;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin answer");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Enter your operation",
            type: "list",
            choices: ["withdraw", "checkbalance"],
        },
    ]);
    console.log(operationAnswer);
    if (operationAnswer.operation === "withdraw") {
        let withdrawAmount = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount you want to withdraw",
                type: "list",
                choices: [100, 200, 400, 600, 800, 1000],
            },
        ]);
        myBalance -= withdrawAmount.amount;
        console.log(`${"your remaining balance is :"}  ${myBalance}`);
    }
    else if (operationAnswer.operation === "checkbalance") {
        console.log(`${"your remaining balance is :"}  ${myBalance}`);
    }
    else {
        console.log("wrong pin answer");
    }
}

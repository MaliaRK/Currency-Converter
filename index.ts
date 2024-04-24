#! /usr/bin/env node

import inquirer from "inquirer"

console.log('\n---WELCOME TO CURRENCY CONVERTER APP!---\n');

const currency: any = {
    USD: 1,   // base currency
    GBP: 0.80,
    EUR: 0.94,
    SAR: 3.75,
    PKR: 278.12,
    BDT: 109.70,
    INR: 83.62
}

let user_answer = await inquirer.prompt(
    [{
        message: "Select From Currency",
        type: 'list',
        name: 'from',
        choices: ['USD','GBP','EUR','SAR','PKR','BDT','INR']
    },
    {
        message: "Select To Currency",
        type: 'list',
        name: 'to',
        choices: ['USD','GBP','EUR','SAR','PKR','BDT','INR'] 
    },
    {
        message: "Enter Your Amount",
        type: 'number',
        name: 'amount'
    }]
)

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(`Currency Conversion: ${user_answer.amount} ${user_answer.from} = ${convertedAmount.toFixed(2)} ${user_answer.to}`);

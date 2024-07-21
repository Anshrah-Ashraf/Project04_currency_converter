import inquirer from "inquirer";
//Define the list of currencies and their exchange rates
let exchangeRates = {
    "USD": 1, //Base currency
    "EUR": 0.9, //European Currency (Euro)
    "JPY": 113, //Japanese Currency (Yen)
    "CAD": 1.3, //Canadian Currency (Dollar)
    "AUD": 1.65, //Australian Currency (Dollar)
    "PAK": 280, //Pakistani Currency (Ruppee)
    //Add more currencies and their exchange rates here
};
//Promt the user to select currencies from and to
let userAnswer = await inquirer.prompt([
    {
        type: 'list',
        name: 'from_currency',
        message: 'Select the currency to convert from:',
        choices: [
            { name: 'USD', value: 'USD' },
            { name: 'EUR', value: 'EUR' },
            { name: 'JPY', value: 'JPY' },
            { name: 'CAD', value: 'CAD' },
            { name: 'AUD', value: 'AUD' },
            { name: 'PAK', value: 'PAK' }
        ],
    },
    {
        type: 'list',
        name: 'to_currency',
        message: 'Select the currency to convert into:',
        choices: [
            { name: 'USD', value: 'USD' },
            { name: 'EUR', value: 'EUR' },
            { name: 'JPY', value: 'JPY' },
            { name: 'CAD', value: 'CAD' },
            { name: 'AUD', value: 'AUD' },
            { name: 'PAK', value: 'PAK' }
        ],
    },
    {
        type: 'input',
        name: 'amount',
        message: 'Enter the amount to convert:',
        validate: (value) => !isNaN(Number(value)) || 'Please enter a valid number',
    }
]);
//Perform currency convertion by using formula
let fromAmount = exchangeRates[userAnswer.from_currency];
let to_amount = exchangeRates[userAnswer.to_currency];
let amount = parseFloat(userAnswer.amount);
//Formula of conversion
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * to_amount;
//Display the converted amount
console.log(`Converted amount = ${convertedAmount}`);

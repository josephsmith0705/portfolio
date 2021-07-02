const operators = document.querySelectorAll('.operation');
const numbers = document.querySelectorAll('.number');
const decimalButton = document.querySelector('#decimal');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');

const display = document.querySelector('#display');
let previousKeyType = '';
let firstNumber = '0';
let operator = '';

console.log(operators);

//Create event listeners for operator buttons
for (i=0; i<operators.length; i++){
    operators[i].addEventListener('click', e=>{
        firstNumber = display.textContent;
        operator = e.target.textContent;
        previousKeyType = 'operator';

        console.log('previous key type: ' + previousKeyType);
        console.log('first number: ' + firstNumber);
        console.log('operator: ' + operator);
    })
}

//Create event listeners for number buttons
for (i=0; i<numbers.length; i++){
    numbers[i].addEventListener('click', e=>{
        console.log(e.target.textContent);
        
        const displayedResult = display.textContent;
        display.textContent = calculator.numberInput(e.target.textContent, 
            display.textContent, previousKeyType);
        previousKeyType = 'number';

        console.log('previous key type: ' + previousKeyType);
        console.log('first number: ' + firstNumber);
        console.log('operator: ' + operator);
    })
}

//Create event listener for decimal button
decimalButton.addEventListener('click', e=>{
    if (previousKeyType === 'operator'){
        display.textContent = "0.";
    } else{
    display.textContent = display.textContent + ".";
    }
    previousKeyType = 'decimal';
})

clearButton.addEventListener('click', e=>{
    display.textContent = "0";
    firstNumber = '0';
    operator = '';
})

//Create event listener for equals button
equalsButton.addEventListener('click', e=>{
    const secondNumber = display.textContent;
    display.textContent = calculator.calculateOutput(parseFloat(firstNumber), 
        parseFloat(secondNumber), operator);
})



class Calculator{
    constructor(){

    }
    numberInput(number, currentResult, previousKeyType){
        if (currentResult === '0' || previousKeyType === 'operator') {
            return number;
        } else {
            return currentResult + number;
        }
    }
    calculateOutput(firstNumber, secondNumber, operator){
        switch (operator){
            case "+":
                return (firstNumber + secondNumber);
                break;
            case "-":
                return (firstNumber - secondNumber);
                break;
            case "×":
                return (firstNumber * secondNumber);
                break;
            case "÷":
                return (firstNumber / secondNumber);
                break;
        }
    }
   
}

var calculator = new Calculator();

/*
buttons.addEventListener('click', e=> {
    if (e.target.matches('button')) {
        const key = e.target;
        const keyContent = key.textContent;
        const displayedResult = display.textContent;
        const previousKeyType = buttons.dataset.previousKeyType;

        switch(key.dataset.action){
            case 'number':
                display.textContent = calculator.numberInput(displayedResult, keyContent, previousKeyType);
                buttons.dataset.previousKeyType = 'button';
                break;
            case 'decimal':
                if (previousKeyType === 'operator'){
                    display.textContent = '0.';
                    buttons.dataset.previousKeyType = 'button';
                } else { 
                    display.textContent = displayedResult + '.';
                }
                break;
            case 'add':
                key.classList.add('is-depressed');
                buttons.dataset.previousKeyType = 'operator';
                firstNumber = displayedResult;
                operator = '+';
                break;
            case 'subtract':
                key.classList.add('is-depressed');
                buttons.dataset.previousKeyType = 'operator';
                break;
            case 'multiply':
                key.classList.add('is-depressed');
                buttons.dataset.previousKeyType = 'operator';
                break;
            case 'divide':
                key.classList.add('is-depressed');
                buttons.dataset.previousKeyType = 'operator';
                break;
            case 'clear':
                display.textContent = '0';
                break;
            case 'calculate':
                let secondNumber = displayedResult;
                display.textContent = firstNumber + operator + secondNumber;
                break;
        }
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'));
    }
})
*/

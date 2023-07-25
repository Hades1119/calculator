/* Operand Functions to handle expression */
function add(num1, num2) {
    return (num1 + num2);
};

function subtract(num1, num2) {
    return (num1 - num2);
};

function multiply(num1, num2) {
    return (num1 * num2);
};

function divide(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        return updateDisplay("Cannot Divide 0")
    }
    return (num1 / num2);
};

/* Operate Function */
function operate(num1, operand, num2) {
    switch (operand) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    };
};

/* Function to add numbers to display based on button press */
function addToDisplay(num) {
    if (displayNum.innerText.length >= 5) {
        displayNum.innerText += "";
    } else {
        displayNum.innerText += num;
    };
}

/* Function to update whole display value*/
function updateDisplay(num) {
    displayNum.innerText = num;
};

/* Initial Variables */
let firstNum = 0;
let prevOperand = "";
let operand = "";
let secondNum = 0;
let result=0;
let displayNum = document.querySelector(".display"); ;/* Grabs starting display numbers */

/* Clear Button Function */
const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
    updateDisplay("")
    firstNum = 0;
    operand = "";
    secondNum = 0;
    result = 0;
});

/* Function to add event listeners to each number button and add the number to display */
const numBtns = document.querySelectorAll(".numBtn");
numBtns.forEach(button => {
    button.addEventListener("click", () => {
        addToDisplay(button.innerText)
    })
})

/* Function to add event listeners to each operand button and set first num variable and operand variable */
const operandBtns = document.querySelectorAll(".operand");
operandBtns.forEach(button => {
    button.addEventListener("click", (event) => {
        firstNum = parseInt(displayNum.innerText);
        prevOperand = operand;
        operand = event.target.innerText;
        secondNum = result
        result = operate(secondNum, operand, firstNum);
        updateDisplay("")
    })
})

/* Function to add an event listener to the equals button and add second num variable as well as executing the operate function and updating the display */
const equalBtn = document.querySelector("#equalsBtn")
equalBtn.addEventListener("click", () => {
    firstNum = parseInt(displayNum.innerText);
    result = operate(result, operand, firstNum);
    updateDisplay(result);
})


/* Function for backspace or Deleting last character on display */
const delBtn = document.querySelector("#delBtn");
delBtn.addEventListener("click", () => {
    const lastCharacter = displayNum.innerText.length - 1;
    updateDisplay(displayNum.innerText.slice(0, lastCharacter))
});


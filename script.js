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
function operate() {
    let result = numbers[0];
    for (let i = 0; i < operands.length; i++) {
        switch (operands[i]) {
            case "+":
                return result = add(result, numbers[i + 1]);
            case "-":
                return subtract(result, numbers[i + 1]);
            case "*":
                return multiply(result, numbers[i + 1]);
            case "/":
                return divide(result, numbers[i + 1]);
        };
    }
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
let numbers = [];
let operands = [];
let displayNum = document.querySelector(".display"); ;/* Grabs starting display numbers */

/* Clear Button Function */
const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
    updateDisplay("")
    firstNum = [];
    operand = [];
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
        if (displayNum.innerText != "") {
            numbers.push(parseInt(displayNum.innerText));
        }
        operands.push(event.target.innerText)
        updateDisplay("")
    })
})

/* Function to add an event listener to the equals button and add second num variable as well as executing the operate function and updating the display */
const equalBtn = document.querySelector("#equalsBtn")
equalBtn.addEventListener("click", () => {
    if (displayNum.innerText != "") {
        numbers.push(parseInt(displayNum.innerText));
    }
    result = operate();
    numbers = [result];
    updateDisplay(result);
})


/* Function for backspace or Deleting last character on display */
const delBtn = document.querySelector("#delBtn");
delBtn.addEventListener("click", () => {
    const lastCharacter = displayNum.innerText.length - 1;
    updateDisplay(displayNum.innerText.slice(0, lastCharacter))
});


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

/* Initial Variables */
let firstNum,operand,secondNum,result=0;
let displayNum = document.querySelector(".display") ;/* Grabs starting display numbers */


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


/* Clear Button Function */
const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {updateDisplay("")});

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
        num1 = parseInt(displayNum.innerText);
        operand = event.target.innerText;
        updateDisplay("")
    })
})

/* Function to add an event listener to the equals button and add second num variable as well as executing the operate function and updating the display */
const equalBtn = document.querySelector("#equalsBtn")
equalBtn.addEventListener("click", (event) => {
    num2 = parseInt(displayNum.innerText);
    result = operate(num1, operand ,num2);
    updateDisplay(result);
})



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
    return (num1 / num2);
};

/* Initial Variables */
let firstNum,operand,secondNum;
let displayNum = document.querySelector(".display") ;/* Grabs starting display numbers */


/* Operate Function */
function operate(num1, operand, num2) {
    switch (operand) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    };
};

/* Function to add numbers to display based on button press */
function updateDisplay(num) {
    displayNum.innerText = num;
};

/* Clear Button Function */
const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {updateDisplay("")});
function add(...args) {
    let result = 0;
    args.forEach(arg => {
        result += arg
    })
    return result
};

function subtract(...args) {
    let result = 0;
    args.forEach(arg => {
        result -= arg
    })
    return result
};

function multiply(...args) {
    let result = 1;
    args.forEach(arg => {
        result *= arg
    })
    return result
};

function divide(...args) {
    let result = 1;
    args.forEach(arg => {
        result /= arg
    })
    return result
};
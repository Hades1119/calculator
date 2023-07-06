function add(...args) {
    result = 0;
    args.forEach(arg => {
        result += arg
    })
    return result
};

function subtract(...args) {
    result = 0;
    args.forEach(arg => {
        result -= arg
    })
    return result
};

function multiply(...args) {
    result = 1;
    args.forEach(arg => {
        result *= arg
    })
    return result
};

function divide(...args) {
    result = 1;
    args.forEach(arg => {
        result /= arg
    })
    return result
};
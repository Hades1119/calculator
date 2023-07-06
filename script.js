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
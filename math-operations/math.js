function checkNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both arguments must be numbers");
    }
};
function add(a, b) {
    checkNumbers(a, b);
    return Number(a) + Number(b);
};
function subtract(a, b) {
    checkNumbers(a, b);
    return Number(a) - Number(b);
}
function multiply(a, b) {
    checkNumbers(a, b);
    if (a === 0 || b === 0) {
        return 0;
    }
    return Number(a) * Number(b);
}
function divide(a, b) {
    checkNumbers(a, b);
    if (a === 0 || b === 0) {
        throw new Error("Cannot divide to 0");
    }
    return Number(a) / Number(b);
}
module.exports = { add, subtract, multiply, divide };
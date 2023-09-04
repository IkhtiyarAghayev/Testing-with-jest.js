function getEvenNumbers(array) {
    if (!array) {
        throw new Error('Input must be include array')
    }
    if (!Array.isArray(array)) {
        throw new Error('Input must be of array type.')
    }
    if (array.length === 0) {
        throw new Error('Array cannot be empty.')
    }
    return array.filter((evenNumbers) => typeof evenNumbers === 'number' && evenNumbers % 2 === 0);
}
module.exports = { getEvenNumbers };
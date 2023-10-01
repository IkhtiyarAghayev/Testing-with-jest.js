function reverse(string) {
    let strippedString = string.trim();
    if (typeof string !== "string") {
        throw new Error('The Input must be in string type.');
    } else if (strippedString === '') {
        throw new Error('The input field cannot be empty.');
    }
    return string.split("").reverse().join("");
};
module.exports = { reverse };
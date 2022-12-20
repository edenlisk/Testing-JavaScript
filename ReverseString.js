function reverseString(string) {
    return string.split('').reverse().join('') || undefined;
}

module.exports = reverseString;
function stringLength(string) {
    if (string.split('').length <= 0 || string.split('').length > 10) {
        return undefined;
    }else {
        return string.split('').length;
    }
}


module.exports = stringLength;
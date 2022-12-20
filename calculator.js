class Calculator {

    // add
    add(a, b) {
        return a + b;
    }

    // subtract
    subtract(a, b) {
        return a - b;
    }

    // multiply
    multiply(a, b) {
        return a * b;
    }

    // divide
    divide(a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a / b;
        } else {
            throw new Error("Invalid");
        }
    }
}

module.exports = Calculator;
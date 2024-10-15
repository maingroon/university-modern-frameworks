/**
 * Calculator class provides basic arithmetic operations.
 */
class Calculator {

    /**
     * Adds two numbers.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The sum of a and b.
     */
    static add(a, b) {
        return a + b;
    }

    /**
     * Subtracts the second number from the first number.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The difference of a and b.
     */
    static subtract(a, b) {
        return a - b;
    }

    /**
     * Multiplies two numbers.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The product of a and b.
     */
    static multiply(a, b) {
        return a * b;
    }

    /**
     * Divides the first number by the second number.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The quotient of a and b.
     * @throws {Error} If b is zero.
     */
    static divide(a, b) {
        if (b === 0) {
            throw new Error('Division by zero');
        }
        return a / b;
    }

    /**
     * Squares a number.
     * @param {number} a - The number to square.
     * @returns {number} The square of a.
     */
    static square(a) {
        return a * a;
    }
}
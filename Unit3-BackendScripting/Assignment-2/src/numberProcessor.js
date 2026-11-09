// Import the 'fs' module to work with the file system
const fs = require('fs');

// Read the file as text using the 'fs.readFileSync' method
const content = fs.readFileSync('./Unit3-BackendScripting/Assignment-2/data/sample-numbers.txt', 'utf8');


// Function for finding the sum of all numbers
function sumNumbers(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return 0;
    }
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Function for finding the highest and lowest numbers
function findHighestAndLowest(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return { highest: null, lowest: null };
    }
    return {
        highest: Math.max(...numbers),
        lowest: Math.min(...numbers)
    };
}

// Function for calculating the average of numbers
function calculateAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return 0;
    }
    const sum = sumNumbers(numbers);
    return sum / numbers.length;
}

// Export the functions for use in other modules
module.exports = {
    sumNumbers,
    findHighestAndLowest,
    calculateAverage
};
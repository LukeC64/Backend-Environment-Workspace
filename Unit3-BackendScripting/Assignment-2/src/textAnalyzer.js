// Import the 'fs' module to work with the file system
const fs = require('fs');

// Read the file as text using the 'fs.readFileSync' method
const content = fs.readFileSync('./Unit3-BackendScripting/Assignment-2/data/quotes.txt', 'utf8');

// Split the content into an array of lines using the .split() method
const lines = content.split('\n');


// Function to count the total number of words in the given text
function countWords(text) {
    if (!text || text.trim() === '') {
        return 0;
    }
    return text.trim().split(/\s+/).length;
}

// Function to find the longest word in the given text
function findLongestWord(text) {
    if (!text || text.trim() === '') {
        return '';
    }
    const words = text.trim().split(/\s+/);
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

// Function to count how many lines the given text has
function countLines(text) {
    if (!text || text.trim() === '') {
        return 0;
    }
    return text.trim().split('\n').length;
}

// Call the functions and log the results to the console
console.log('Total number of words:', countWords(content));
console.log('Longest word:', findLongestWord(content));
console.log('Total number of lines:', countLines(content));

// Export the functions for use in other modules
module.exports = {
    countWords,
    findLongestWord,
    countLines
};
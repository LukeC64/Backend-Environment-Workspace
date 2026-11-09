// Create a test suite for the textAnalyzer.js module
const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');

describe('Text Analyzer', () => {
  // Test for countWords function
  test('counts words in a normal sentence', () => {
    expect(countWords('the quick brown fox')).toBe(4);
  });

  // Test for findLongestWord function
  test('finds the longest word', () => {
    expect(findLongestWord('a quick brown elephant')).toBe('elephant');
  });

  // Test for countLines function
  test('counts multiple lines', () => {
    expect(countLines('line one\nline two\nline three')).toBe(3);
  });
});
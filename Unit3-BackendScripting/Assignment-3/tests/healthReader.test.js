// Create a test suite for the healthReader module
const { HealthReader, countHealthRecords } = require('../healthReader');
const fs = require('fs').promises;
const path = require('path');

// Test seeing if the HealthReader class can read health data from health-metrics.json
describe('HealthReader', () => {
    const testFilePath = path.join(__dirname, 'test-health-metrics.json');

    test('should read health data from a valid JSON file', async () => {
        const healthReader = new HealthReader(testFilePath);
        const data = await healthReader.readHealthData();
        expect(data).toBeInstanceOf(Array);
    });
});

// Test the countHealthRecords function
describe('countHealthRecords', () => {
    const testFilePath = path.join(__dirname, 'test-health-metrics.json');

    test('should count health records in a valid JSON file', async () => {
        const count = await countHealthRecords(testFilePath);
        expect(count).toBeGreaterThan(0);
    });
});

// Test error handling when the JSON file is not found or cannot be read
describe('Error handling', () => {
    const invalidFilePath = path.join(__dirname, 'nonexistent-file.json');

    test('should throw an error when the JSON file is not found', async () => {
        const healthReader = new HealthReader(invalidFilePath);
        await expect(healthReader.readHealthData()).rejects.toThrow();
    });
});

// Test making sure functions return the correct values when the JSON file is valid and contains data
describe('Correct values', () => {
    const testFilePath = path.join(__dirname, 'test-health-metrics.json');

    test('should return the correct number of health records', async () => {
        const count = await countHealthRecords(testFilePath);
        expect(count).toBe(5);
    });
});
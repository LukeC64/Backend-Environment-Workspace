// Create a test suite for the workoutReader module
const { WorkoutReader, countWorkoutRecords, calculateTotalWorkoutMinutes } = require('../workoutReader');
const fs = require('fs').promises;
const path = require('path');

// Test seeing if the WorkoutReader class can read workout data from workouts.csv
describe('WorkoutReader', () => {
    const testFilePath = path.join(__dirname, 'test-workouts.csv');

    test('should read workout data from a valid CSV file', async () => {
        const workoutReader = new WorkoutReader(testFilePath);
        const data = await workoutReader.readWorkoutData();
        expect(data).toBeInstanceOf(Array);
    });
});

// Test the countWorkoutRecords function
describe('countWorkoutRecords', () => {
    const testFilePath = path.join(__dirname, 'test-workouts.csv');

    test('should count workout records in a valid CSV file', async () => {
        const count = await countWorkoutRecords(testFilePath);
        expect(count).toBeGreaterThan(0);
    });
});

// Test error handling when the CSV file is not found or cannot be read
describe('Error handling', () => {
    const invalidFilePath = path.join(__dirname, 'nonexistent-file.csv');

    test('should throw an error when the CSV file is not found', async () => {
        const workoutReader = new WorkoutReader(invalidFilePath);
        await expect(workoutReader.readWorkoutData()).rejects.toThrow();
    });
});

// Test making sure functions return the correct values when the CSV file is valid and contains data
describe('Correct values', () => {
    const testFilePath = path.join(__dirname, 'test-workouts.csv');

    test('should return the correct number of workout records', async () => {
        const count = await countWorkoutRecords(testFilePath);
        expect(count).toBe(5);
    });
});
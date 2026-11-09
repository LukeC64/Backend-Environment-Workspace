// Workout Reader that parses workout data asynchronously from workouts.csv
const fs = require('fs').promises;

class WorkoutReader {
    constructor(filePath) {
        this.filePath = filePath;
    }

    async readWorkoutData() {
        try {
            const data = await fs.readFile(this.filePath, 'utf8');
            return data;
        } catch (error) {
            console.error('Error reading workout data:', error);
            throw error;
        }
    }
}

// Function that counts the total number of workout records in the CSV file
async function countWorkoutRecords(filePath) {
    const workoutReader = new WorkoutReader(filePath);
    const workoutData = await workoutReader.readWorkoutData();
    // Assuming the CSV data is a string with each line representing a record
    return workoutData.split('\n').length - 1; // Subtract 1 to account for the header row
}

// Calculate total workout minutes from the CSV data
async function calculateTotalWorkoutMinutes(filePath) {
    const workoutReader = new WorkoutReader(filePath);
    const workoutData = await workoutReader.readWorkoutData();
    const lines = workoutData.split('\n').slice(1); // Skip header row
    let totalMinutes = 0;
    for (const line of lines) {
        const columns = line.split(',');
        if (columns.length >= 3) {
            const minutes = parseInt(columns[2]);
            if (!isNaN(minutes)) {
                totalMinutes += minutes;
            }
        }
    }
    return totalMinutes;
}

// Error handling when CSV file is not found or cannot be read
async function main() {
    const filePath = './data/workouts.csv'; // Path to the CSV file
    try {
        const recordCount = await countWorkoutRecords(filePath);
        console.log(`Total number of workout records: ${recordCount}`);
        const totalMinutes = await calculateTotalWorkoutMinutes(filePath);
        console.log(`Total workout minutes: ${totalMinutes}`);
    } catch (error) {
        console.error('Error reading workout data (Missing or invalid CSV):', error);
    }
}

// Run the main function
main();

// Export the functions for use in other modules
module.exports = {
    WorkoutReader,
    countWorkoutRecords,
    calculateTotalWorkoutMinutes
};
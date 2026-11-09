require('dotenv').config({ quiet: true });
// console.log(process.env.USER_NAME);
// console.log(process.env.WEEKLY_GOAL);

// Import functions from workoutReader.js and healthReader.js
const { countWorkoutRecords, calculateTotalWorkoutMinutes } = require('./workoutReader');
const { countHealthRecords } = require('./healthReader');

// Call functions using async/await and handle errors
async function main() {
    const workoutFilePath = './data/workouts.csv'; // Path to the CSV file
    const healthFilePath = './data/health-metrics.json'; // Path to the JSON file
}

// Display a summary of the total workout records, total workout minutes, and total health records
async function displaySummary() {
    try {
        const workoutRecordCount = await countWorkoutRecords('./data/workouts.csv');
        const totalWorkoutMinutes = await calculateTotalWorkoutMinutes('./data/workouts.csv');
        const healthRecordCount = await countHealthRecords('./data/health-metrics.json');
        console.log(`Summary for ${process.env.USER_NAME}:`);
        console.log(`Total workout records: ${workoutRecordCount}`);
        console.log(`Total workout minutes: ${totalWorkoutMinutes}`);
        console.log(`Total health records: ${healthRecordCount}`);
    } catch (error) {
        console.error('Error displaying summary:', error);
    }
}

// Display message indicating if the user has met their weekly goal
async function checkWeeklyGoal() {
    try {
        const totalWorkoutMinutes = await calculateTotalWorkoutMinutes('./data/workouts.csv');
        const weeklyGoal = parseInt(process.env.WEEKLY_GOAL);

        if (totalWorkoutMinutes >= weeklyGoal) {
            console.log(`Great job, ${process.env.USER_NAME}! You have met your weekly goal of ${weeklyGoal} minutes.`);
        } else {
            console.log(`Keep going, ${process.env.USER_NAME}! You are currently at ${totalWorkoutMinutes} minutes, and your weekly goal is ${weeklyGoal} minutes.`);
        }
    } catch (error) {
        console.error('Error checking weekly goal:', error);
    }
}

// Run the main function to display the summary and check the weekly goal
async function run() {
    await displaySummary();
    await checkWeeklyGoal();
}

// Call the run function to start the data processing
run();
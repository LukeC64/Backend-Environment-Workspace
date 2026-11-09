// Health Reader that reads JSON health data asynchronously using fs.readFile

const fs = require('fs').promises;

class HealthReader {
    constructor(filePath) {
        this.filePath = filePath;
    }

    async readHealthData() {
        try {
            const data = await fs.readFile(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading health data:', error);
            throw error;
        }
    }
}

// Function that counts the total number of health records in the JSON file
async function countHealthRecords(filePath) {
    const healthReader = new HealthReader(filePath);
    const healthData = await healthReader.readHealthData();
    return healthData.metrics.length;
}

// Error handling when JSON file is not found or cannot be read
async function main() {
    const filePath = './data/health-metrics.json'; // Path to the JSON file

    try {
        const recordCount = await countHealthRecords(filePath);
        console.log(`Total number of health records: ${recordCount}`);
    } catch (error) {
        console.error('Error counting health records (Missing or invalid JSON):', error);
    }
}

// Run the main function
main();

// Export the functions for use in other modules
module.exports = {
    HealthReader,
    countHealthRecords
};
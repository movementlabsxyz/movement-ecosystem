# Tally Process README

## Overview

This guide outlines the process for aggregating data from Tally, processing it, and generating the necessary files for the repository.

## Prerequisites

- Ensure you have the necessary login credentials for Tally. Contact Bennett Davis or Movement Team if you don’t have them.
- Make sure Node.js is installed on your machine.

## Steps

### 1. Download Data from Tally

1. Teams will fill out the form on Tally.
2. Find the `Movement Ecosystem Form` on Tally and download the .csv file containing the aggregated data.

### 2. Prepare the Repository

1. Place the downloaded `.csv` file into the `process` folder of the repository.
2. Rename the file to `process.csv`.

### 3. Run the Processing Script

1. Open your terminal and navigate to the `process` folder:
   ```bash
   cd process
   ```
2. Run the processing script:
   ```bash
   npm install
   
   node run.js
   ```
   - This script places the images into the correct folders.
   - It generates `processed.json`, which holds the protocol information in JSON format.

### 4. Update the Ecosystem File

1. Copy the contents of `processed.json`.
2. Paste the copied information into `ecosystem.json`.

### 5. Create a Pull Request

1. Once all the changes are made, commit them to your branch.
2. Push the branch to the repository.
3. Create a pull request for review.

## Contact

For any issues or questions, please contact the repository administrator or the project Movement Team.
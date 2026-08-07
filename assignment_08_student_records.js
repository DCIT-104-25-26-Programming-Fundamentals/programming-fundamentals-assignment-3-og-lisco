// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// Build a console-based program that stores and manages student information.
// Each student is represented as a JavaScript object containing:
//
//   - name   : the student's full name  (string)
//   - id     : a unique student ID number (number, e.g. 20240001)
//   - scores : an array of scores from multiple assessments (e.g. [75, 88, 90])
//
// Example object:
//   { name: "Alice Mensah", id: 20240001, scores: [78, 85, 90] }
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_08_student_records.js
//
// -----------------------------------------------------------------------------
// FEATURES YOUR PROGRAM MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Add a Student
//      - Ask the user to enter the student's name and ID.
//      - Ask how many scores to enter, then collect each score one by one.
//      - Save the student object and confirm it was added.
//
//   2. Display All Students
//      - Print a formatted table showing every student's:
//          Name, ID, individual scores, and their average score.
//      - If no students have been added yet, print a message saying so.
//
//   3. Calculate Average Score for a Specific Student
//      - Ask the user to enter a student ID.
//      - Find the student and print their average score.
//      - If the ID is not found, print an error message.
//
//   4. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ================================
//      STUDENT RECORD SYSTEM MENU
//   ================================
//   1. Add student
//   2. Display all students
//   3. Calculate average score
//   4. Quit
//   Enter your choice (1-4):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Enter your choice (1-4): 1
//   Student name: Alice Mensah
//   Student ID: 20240001
//   How many scores? 3
//   Enter score 1: 78
//   Enter score 2: 85
//   Enter score 3: 90
//   Student "Alice Mensah" added successfully.
//
//   Enter your choice (1-4): 3
//   Enter student ID: 20240001
//   Alice Mensah's average score: 84.33
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store all student records in an array of objects.
// - Average scores must be displayed to 2 decimal places (use .toFixed(2)).
// - Each feature MUST be in its own function (see scaffold below).
// - Handle invalid menu choices and missing student IDs gracefully.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
const readline = require('readline-sync');

// Array to store all tasks
let tasks = [];

// Display the interactive menu
function displayMenu() {
    console.log("==============================");
    console.log("       TO-DO LIST MENU        ");
    console.log("==============================");
    console.log("1. Add task");
    console.log("2. View tasks");
    console.log("3. Delete task");
    console.log("4. Quit");
}

// Feature 1: Add a Task
function addTask() {
    const taskDescription = readline.question("Enter task: ");
    if (taskDescription.trim() === "") {
        console.log("Task description cannot be empty.");
        return;
    }
    tasks.push(taskDescription);
    console.log(`Task added: "${taskDescription}"`);
}

// Feature 2: View All Tasks
function viewTasks() {
    if (tasks.length === 0) {
        console.log("Your tasks list is currently empty.");
        return;
    }
    console.log("Your Tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

// Feature 3: Delete a Task
function deleteTask() {
    if (tasks.length === 0) {
        console.log("No tasks available to delete.");
        return;
    }

    const taskNumInput = readline.question("Enter task number to delete: ");
    const taskIndex = parseInt(taskNumInput, 10) - 1;

    // Validate user input
    if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
        console.log("Error: Invalid task number.");
    } else {
        const removedTask = tasks.splice(taskIndex, 1);
        console.log(`Task "${removedTask[0]}" has been removed.`);
    }
}

// Main execution loop
function main() {
    let running = true;

    while (running) {
        displayMenu();
        const choice = readline.question("Enter your choice (1-4): ");

        switch (choice.trim()) {
            case '1':
                addTask();
                break;
            case '2':
                viewTasks();
                break;
            case '3':
                deleteTask();
                break;
            case '4':
                console.log("Goodbye!");
                running = false;
                break;
            default:
                console.log("Invalid choice. Please select a number between 1 and 4.");
                break;
        }
        console.log(); // Blank line for cleaner menu separation
    }
}

// Run the application
main();


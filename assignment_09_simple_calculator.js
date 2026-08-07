// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
const readline = require('readline-sync');

// Global array to store all student object records
const students = [];

// Helper function to calculate average score
function getAverage(scores) {
    if (scores.length === 0) return 0;
    const sum = scores.reduce((total, score) => total + score, 0);
    return (sum / scores.length).toFixed(2);
}

// 1. Function to Add a Student
function addStudent() {
    console.log("\n--- Add Student ---");
    const name = readline.question("Student name: ");
    const id = Number(readline.question("Student ID: "));
    const count = Number(readline.question("How many scores? "));

    const scores = [];
    for (let i = 1; i <= count; i++) {
        const score = Number(readline.question(`Enter score ${i}: `));
        scores.push(score);
    }

    const studentObj = {
        name: name,
        id: id,
        scores: scores
    };

    students.push(studentObj);
    console.log(`Student "${name}" added successfully.`);
}

// 2. Function to Display All Students
function displayAllStudents() {
    console.log("\n--- All Students ---");
    if (students.length === 0) {
        console.log("No students have been added yet.");
        return;
    }

    console.log("\n------------------------------------------------------------------");
    console.log("ID\t\tName\t\tScores\t\tAverage");
    console.log("------------------------------------------------------------------");
    students.forEach(student => {
        const avg = getAverage(student.scores);
        console.log(`${student.id}\t${student.name}\t[${student.scores.join(', ')}]\t${avg}`);
    });
    console.log("------------------------------------------------------------------\n");
}

// 3. Function to Calculate Average Score for a Specific Student
function calculateSpecificAverage() {
    console.log("\n--- Calculate Student Average ---");
    const targetId = Number(readline.question("Enter student ID: "));
    const student = students.find(s => s.id === targetId);

    if (!student) {
        console.log(`Error: Student with ID ${targetId} was not found.`);
    } else {
        const avg = getAverage(student.scores);
        console.log(`${student.name}'s average score: ${avg}`);
    }
}

// Main Menu Loop
function mainMenu() {
    let running = true;

    while (running) {
        console.log("\nSTUDENT RECORD SYSTEM MENU");
        console.log("================================");
        console.log("1. Add student");
        console.log("2. Display all students");
        console.log("3. Calculate average score");
        console.log("4. Quit");

        const choice = readline.question("Enter your choice (1-4): ").trim();

        switch (choice) {
            case '1':
                addStudent();
                break;
            case '2':
                displayAllStudents();
                break;
            case '3':
                calculateSpecificAverage();
                break;
            case '4':
                console.log("Exiting program. Goodbye!");
                running = false;
                break;
            default:
                console.log("Invalid option! Please enter a number between 1 and 4.");
        }
    }
}

// Start the program
mainMenu(); 

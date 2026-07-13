# Task Manager Application

## Overview

This project is a task management application that was initially provided as incomplete starter code with multiple errors. The goal of the project was to debug, fix, and enhance the application using modern JavaScript practices.

The final application allows users to create, view, and manage tasks with different priorities. It also includes improved code structure, error handling, and testing to ensure reliability.

---

## Errors Identified

During the review of the starter code, several issues were found across different areas:

* **Variables & Operators:** Incorrect use of `var`, missing declarations, and wrong comparison operators (`==` instead of `===`)
* **Control Flow:** Infinite loops and off-by-one errors in loops
* **Functions:** Missing parameters, incorrect return logic, and lack of validation
* **Classes & OOP:** Missing properties, incomplete class methods, and incorrect inheritance (`super()` not used)
* **Modern JavaScript:** No use of destructuring, template literals, or spread operators
* **DOM Manipulation:** Incorrect selectors, missing event listeners, and no null checks
* **Storage:** No JSON handling and incorrect use of localStorage
* **Testing:** Missing and incomplete Jest tests
* **Error Handling:** No try-catch blocks or input validation

---

## Fixes Implemented

The following improvements were made to resolve the issues:

* Replaced all `var` with `let` and `const`
* Fixed all comparison and assignment operator issues
* Corrected loops and added `for...of` where appropriate
* Implemented proper function parameters and return values
* Added validation and error handling using `try-catch`
* Fixed and completed class implementations including inheritance
* Refactored code using modern JavaScript features
* Improved DOM manipulation and event handling
* Implemented JSON storage using `localStorage`
* Wrote comprehensive Jest tests to cover functionality

---

## Features Added

* Task creation and management
* Priority-based task filtering
* Dynamic DOM updates
* Event delegation for better performance
* Local storage persistence (save/load tasks)
* Recursive and functional programming examples
* Clean and modular code structure using ES6 modules

---

## How to Run the Application

1. Clone the repository:

   ```bash
   git clone <your-repo-link>
   ```

2. Navigate into the project folder:

   ```bash
   cd task-manager
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Open `index.html` in your browser

---

## Running Tests

To run tests using Jest:
=======
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=24216029&assignment_repo_type=AssignmentRepo)
# Task Management System

## Overview

This project is a JavaScript Task Management System developed by debugging, correcting, and completing an existing starter codebase. The application demonstrates JavaScript fundamentals, object-oriented programming, functional programming, ES6+ features, DOM manipulation, error handling, local storage, and automated testing.

## Errors Found

The starter project contained issues in the following areas:

* Variable declarations and scoping
* Comparison and assignment operators
* Control flow and loops
* Function parameters and recursion
* Object-oriented programming
* Inheritance implementation
* DOM selectors and event handling
* JSON and localStorage
* ES6 modules
* Error handling
* Testing coverage
* Code quality and formatting

## Fixes Implemented

The following improvements were completed:

* Corrected variable declarations using `let` and `const`
* Added parameter validation
* Fixed loops and conditional statements
* Corrected recursive functions
* Implemented classes and inheritance using `super()`
* Added `toggleCompletion()` functionality
* Implemented object destructuring
* Replaced string concatenation with template literals
* Used spread operators for array operations
* Organized the project using ES6 modules
* Corrected DOM selectors
* Added event listeners and event delegation
* Implemented localStorage using `JSON.stringify()` and `JSON.parse()`
* Added comprehensive error handling using `try...catch`
* Improved overall code readability and consistency

## Features

* Add tasks
* Display tasks
* Toggle task completion
* Update task priority
* Search tasks
* Calculate average priority
* High-priority task filtering
* Local storage persistence
* Recursive task counting
* Jest unit testing

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* Jest
* Local Storage API
* Git & GitHub

## Running the Application

1. Install dependencies:

```bash
npm install
```

2. Start the project using your preferred local server.

## Running the Tests


```bash
npm test
```

<<<<<<< HEAD
All tests should pass successfully.

---

## Test Coverage

The test suite includes:

* Task class creation and methods
* SubTask inheritance
* Task functions (add, update, find)
* Array operations and filtering
* Recursive function validation
* Error handling and edge cases

---

## Screenshots

The following screenshots are included in the project:

* Application running in the browser
* Console showing no errors
* Jest test results (all passing)
* DOM updates when interacting with the app

---

## Reflection

One of the most challenging parts of this project was debugging the initial codebase and identifying hidden errors such as infinite loops and incorrect class inheritance. Fixing these required careful analysis and testing.

Another challenge was implementing modern JavaScript features while maintaining clean and readable code. Writing tests also helped in understanding how each part of the application should behave and ensured that all functionality worked correctly.

Overall, this project improved my understanding of JavaScript fundamentals, debugging techniques, and writing maintainable code.
=======
All Jest tests should pass successfully.

## Test Results

The project includes tests covering:

* Task creation
* Class inheritance
* Array operations
* Recursive functions
* Error handling
* Edge cases

All tests pass successfully.

## Screenshots

Include the following screenshots in the `screenshots` folder:

* Application running in the browser
* Browser console showing no errors
* Jest tests passing
* Task management functionality

## Reflection

The most challenging aspects of the project were debugging the existing code, identifying logical errors, implementing proper validation, and ensuring that all JavaScript requirements were satisfied. Completing the project strengthened my understanding of modern JavaScript, object-oriented programming, functional programming, DOM manipulation, testing, and debugging practices.


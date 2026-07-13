// Task Management Application - Starter Code with Errors

// Global variables (scoping issues)
const taskList = [];
let taskCounter = 0;

// Task class with errors
class Task {
    constructor(title, description, priority) {
        if (typeof title !== 'string' || typeof description !== 'string' || typeof priority !== 'number') {
            throw new Error("Invalid input types, title and description should be strings, priority should be a number.");
        }
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.completed = false;
        // Missing: id property
    }

    // Missing: method to toggle completion

    getInfo() {
        // Wrong string concatenation - should use template literals
        return "Task: " + this.title + " - Priority: " + this.priority;
    }
}

// Subtask class with inheritance issues
class SubTask extends Task {
    constructor(title, description, priority, parentTask) {
        // Missing: super() call
        this.parentTask = parentTask;
    }
}

// Functions with errors

// Function with no error handling
function addTask(title, description, priority) {
    if (typeof title !== 'string' || typeof description !== 'string' || typeof priority !== 'number') {
        throw new Error("Invalid input types, title and description should be strings, priority should be a number.");
    }

    const newTask = new Task(title, description, priority);
    taskList.push(newTask);
    taskCounter++;
    return newTask;
}

export function displayAllTasks() {
    for (const task of taskList) {
        console.log(task.title);
    }
}

function findTaskByTitle(title) {
    if (typeof title !== 'string') {
        throw new Error("Title must be a string.")
    }

    for (const task of taskList) {
        if (task.title === title) {
            return task;
        }
    }
    return undefined;
}

export function updateTaskPriority(taskId, newPriority) {
    if (typeof taskId !== "number") {
        throw new Error("Invalid task ID");
    }

    const task = taskList.find(t => t.id === taskId);
    if (!task) return false;

    task.priority = newPriority;
    return true;
}

export function getTaskDetails(task) {
    const { title, description, priority, completed } = task;

    return { title, description, priority, completed };
}

export function mergeTasks(list1, list2) {
    return [...list1, ...list2];
}

export function countCompletedTasks(tasks, index = 0) {
    if (!Array.isArray(tasks)) {
        throw new Error("Tasks must be an array");
    }

    if (index >= tasks.length) {
        return 0; // BASE CASE
    }

    return (tasks[index].completed ? 1 : 0) +
        countCompletedTasks(tasks, index + 1);
}

// Function with Math object issues
function calculateAveragePriority() {
    let total = 0;
    // Missing: check for empty array
    for (let i = 0; i < taskList.length; i++) {
        total = total + taskList[i].priority;
    }
    // Should use Math.round or toFixed
    return total / taskList.length;
}

// Filter function with errors
function getHighPriorityTasks(minPriority) {
    let highPriority = [];
    // Should use array methods (filter)
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].priority > minPriority) {
            highPriority.push(taskList[i]);
        }
    }
    return highPriority;
}

// Object with missing methods
let TaskManager = {
    tasks: taskList,

    // Missing: method to add task using functional approach
    // Missing: method using array methods (map, filter, reduce)

    getTotalTasks: function () {
        return this.tasks.length;
    }
};

// Export issues - should be a module
// Missing: proper module exports

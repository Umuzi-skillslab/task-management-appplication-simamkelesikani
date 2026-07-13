// Jest Tests - Starter Code with Errors and Missing Tests

import {
    Task,
    SubTask,
    addTask,
    findTaskByTitle,
    updateTaskPriority,
    calculateAveragePriority,
    mergeTasks,
    getHighPriorityTasks,
    countCompletedTasks,
    taskList
} from '../src/app.js';

describe('Task Class', () => {
    test('should create a task', () => {
        var task = new Task('Test Task', 'Description', 3);
        expect(task.title).toBe('Test Task');
        // Missing: other property checks
    });

    // Missing: test for getInfo method
    // Missing: test for toggle completion
});

describe('Task Functions', () => {
    // Missing: beforeEach to reset taskList

    test('should add task', () => {
        var task = addTask('New Task', 'Test', 2);
        // Wrong assertion - should check taskList
        expect(task).toBeDefined();
    });

    // Missing: test for findTaskByTitle
    // Missing: test for updateTaskPriority
    // Missing: test for calculateAveragePriority
    // Missing: test for error handling
});

describe('Array Operations', () => {
    // Missing: tests for mergeTasks
    // Missing: tests for getHighPriorityTasks
    // Missing: tests for recursive function
});

// Missing: describe blocks for:
// - SubTask class and inheritance
// - Destructuring functions
// - Spread/rest operator functions
// - Module exports/imports

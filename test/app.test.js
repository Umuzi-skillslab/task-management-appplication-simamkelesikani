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
    test('should create a task with correct properties', () => {
        const task = new Task(1, 'Test Task', 'Description', 3);

        expect(task.title).toBe('Test Task');
        expect(task.description).toBe('Description');
        expect(task.priority).toBe(3);
        expect(task.completed).toBe(false);
    });

    test('should return correct info string', () => {
        const task = new Task(1, 'Test Task', 'Desc', 2);
        expect(task.getInfo()).toBe('Task: Test Task - Priority: 2');
    });

    test('should toggle completion status', () => {
        const task = new Task(1, 'Test', 'Desc', 1);
        task.toggleCompletion();
        expect(task.completed).toBe(true);
    });
});

describe('SubTask Class', () => {
    test('should inherit from Task', () => {
        const parent = new Task(1, 'Parent', 'Desc', 2);
        const subTask = new SubTask(2, 'Child', 'Desc', 1, parent);

        expect(subTask.title).toBe('Child');
        expect(subTask.parentTask).toBe(parent);
    });
});

describe('Task Functions', () => {

    beforeEach(() => {
        taskList.length = 0;
    });

    test('should add a task to taskList', () => {
        const task = addTask('New Task', 'Test', 2);

        expect(taskList.length).toBe(1);
        expect(task.title).toBe('New Task');
    });

    test('should find task by title', () => {
        addTask('Find Me', 'Test', 1);

        const result = findTaskByTitle('Find Me');
        expect(result).toBeDefined();
        expect(result.title).toBe('Find Me');
    });

    test('should update task priority', () => {
        const task = addTask('Update Me', 'Test', 1);

        const result = updateTaskPriority(task.id, 5);
        expect(result).toBe(true);
        expect(task.priority).toBe(5);
    });

    test('should calculate average priority', () => {
        addTask('Task1', 'Test', 2);
        addTask('Task2', 'Test', 4);

        const avg = calculateAveragePriority();
        expect(avg).toBe(3);
    });

    test('should handle invalid title input (edge case)', () => {
        expect(() => addTask(123, 'Test', 1)).toThrow();
    });
});

describe('Array Operations', () => {

    beforeEach(() => {
        taskList.length = 0;
    });

    test('should merge two task arrays', () => {
        const list1 = [new Task(1, 'A', 'Desc', 1)];
        const list2 = [new Task(2, 'B', 'Desc', 2)];

        const merged = mergeTasks(list1, list2);
        expect(merged.length).toBe(2);
    });

    test('should filter high priority tasks', () => {
        addTask('Low', 'Test', 1);
        addTask('High', 'Test', 5);

        const result = getHighPriorityTasks(3);
        expect(result.length).toBe(1);
        expect(result[0].title).toBe('High');
    });

    test('should count completed tasks using recursion', () => {
        const t1 = addTask('Task1', 'Test', 1);
        const t2 = addTask('Task2', 'Test', 2);

        t1.toggleCompletion();

        const count = countCompletedTasks(taskList);
        expect(count).toBe(1);
    });
});

describe('Error Handling', () => {

    test('should throw error for invalid taskId', () => {
        expect(() => updateTaskPriority('invalid', 2)).toThrow();
    });

    test('should throw error for invalid tasks array in recursion', () => {
        expect(() => countCompletedTasks(null)).toThrow();
    });
});


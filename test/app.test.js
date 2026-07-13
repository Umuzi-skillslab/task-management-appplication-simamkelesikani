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
        // Updated to match the new getInfo() format, which now includes completion status
        expect(task.getInfo()).toBe('Task: Test Task | Priority: 2 | Completed: false');
    });

    test('should throw error for invalid title', () => {
        expect(() => {
            new Task(1, 123, 'Desc', 2);
        }).toThrow();
    });

    test('should throw error for empty title', () => {
        expect(() => {
            new Task(1, '   ', 'Desc', 2);
        }).toThrow();
    });

    test('should toggle completion status', () => {
        const task = new Task(1, 'Test', 'Desc', 1);
        task.toggleCompletion();
        expect(task.completed).toBe(true);
    });

    test('should toggle back to false', () => {
        const task = new Task(1, 'Test', 'Desc', 1);
        task.toggleCompletion();
        task.toggleCompletion();
        expect(task.completed).toBe(false);
    });
});

describe('SubTask Class', () => {
    test('should inherit from Task', () => {
        const parent = new Task(1, 'Parent', 'Desc', 2);
        const subTask = new SubTask(2, 'Child', 'Desc', 1, parent);
        expect(subTask.title).toBe('Child');
        expect(subTask.parentTask).toBe(parent);
    });

    test('should be an instance of both SubTask and Task', () => {
        const parent = new Task(1, 'Parent', 'Desc', 2);
        const subTask = new SubTask(2, 'Child', 'Desc', 1, parent);
        expect(subTask).toBeInstanceOf(Task);
        expect(subTask).toBeInstanceOf(SubTask);
    });

    test('should throw error if parentTask is not a Task instance', () => {
        expect(() => {
            new SubTask(2, 'Child', 'Desc', 1, { not: 'a task' });
        }).toThrow();
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

    test('should throw for empty title', () => {
        expect(() => addTask('', 'Desc', 2)).toThrow();
    });

    test('should handle invalid title input (edge case)', () => {
        expect(() => addTask(123, 'Test', 1)).toThrow();
    });

    test('should find task by title', () => {
        addTask('Find Me', 'Test', 1);
        const result = findTaskByTitle('Find Me');
        expect(result).toBeDefined();
        expect(result.title).toBe('Find Me');
    });

    test('should return undefined if task does not exist', () => {
        expect(findTaskByTitle('Missing')).toBeUndefined();
    });

    test('should throw error for non-string title in findTaskByTitle', () => {
        expect(() => findTaskByTitle(123)).toThrow();
    });

    test('should update task priority', () => {
        const task = addTask('Update Me', 'Test', 1);
        const result = updateTaskPriority(task.id, 5);
        expect(result).toBe(true);
        expect(task.priority).toBe(5);
    });

    test('should return false for missing task', () => {
        const result = updateTaskPriority(999, 5);
        expect(result).toBe(false);
    });

    test('should calculate average priority', () => {
        addTask('Task1', 'Test', 2);
        addTask('Task2', 'Test', 4);
        const avg = calculateAveragePriority();
        expect(avg).toBe(3);
    });

    test('should return 0 for empty task list', () => {
        expect(calculateAveragePriority()).toBe(0);
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
        expect(merged[0].title).toBe('A');
        expect(merged[1].title).toBe('B');
    });

    test('should throw if mergeTasks arguments are not arrays', () => {
        expect(() => mergeTasks('not array', [])).toThrow();
    });

    test('should filter high priority tasks', () => {
        addTask('Low', 'Test', 1);
        addTask('High', 'Test', 5);
        const result = getHighPriorityTasks(3);
        expect(result.length).toBe(1);
        expect(result[0].title).toBe('High');
        expect(result[0].priority).toBe(5);
    });

    test('should count completed tasks using recursion', () => {
        const t1 = addTask('Task1', 'Test', 1);
        addTask('Task2', 'Test', 2);
        t1.toggleCompletion();
        const count = countCompletedTasks(taskList);
        expect(count).toBe(1);
    });

    test('should return 0 when no tasks are completed', () => {
        addTask('One', 'Test', 1);
        addTask('Two', 'Test', 2);
        expect(countCompletedTasks(taskList)).toBe(0);
    });
});

describe('Error Handling', () => {
    test('should throw error for invalid taskId', () => {
        expect(() => updateTaskPriority('invalid', 2)).toThrow();
    });

    test('should throw error for invalid priority type', () => {
        const task = addTask('Task', 'Test', 1);
        expect(() => updateTaskPriority(task.id, 'high')).toThrow();
    });

    test('should throw error for invalid tasks array in recursion', () => {
        expect(() => countCompletedTasks(null)).toThrow();
    });

    test('should throw error for non-string title in findTaskByTitle', () => {
        expect(() => findTaskByTitle(123)).toThrow();
    });
});



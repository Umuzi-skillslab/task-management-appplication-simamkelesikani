const taskList = [];
let taskCounter = 0;


export class Task {
    constructor(id, title, description, priority) {
        if (typeof title !== "string") {
            throw new Error("Title must be a string");
        }

        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.completed = false;
    }

    toggleCompletion() {
        this.completed = !this.completed;
    }

    getInfo() {
        return `Task: ${this.title} - Priority: ${this.priority}`;
    }
}

export class SubTask extends Task {
    constructor(id, title, description, priority, parentTask) {
        super(id, title, description, priority);
        this.parentTask = parentTask;
    }
}


export function addTask(title, description, priority) {
    if (typeof title !== "string") {
        throw new Error("Invalid title");
    }

    const newTask = new Task(taskCounter++, title, description, priority);
    taskList.push(newTask);
    return newTask;
}


export function displayAllTasks() {
    for (const task of taskList) {
        console.log(task.title);
    }
}


export function findTaskByTitle(title) {
    if (typeof title !== "string") {
        throw new Error("Title must be a string");
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


export function getHighPriorityTasks(minPriority) {
    return taskList.filter(task => task.priority > minPriority);
}

export function applyToTasks(callback) {
    return taskList.map(callback);
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


export function calculateAveragePriority() {
    if (taskList.length === 0) return 0;

    const total = taskList.reduce((sum, task) => sum + task.priority, 0);
    return Math.round(total / taskList.length);
}


export const TaskManager = {
    getTotalTasks() {
        return taskList.length;
    },

    getCompletedTasks() {
        return taskList.filter(task => task.completed);
    },

    deleteTask(id) {
        return taskList.filter(task => task.id !== id);
    }
};


export { taskList };
const taskList = [];
let taskCounter = 0;

export class Task {
    constructor(id, title, description, priority) {
        if (typeof title !== "string" || title.trim() === "") {
            throw new Error("Title must be a non-empty string");
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
        return `Task: ${this.title} | Priority: ${this.priority} | Completed: ${this.completed}`;
    }
}

export class SubTask extends Task {
    constructor(id, title, description, priority, parentTask) {
        super(id, title, description, priority);
        if (!(parentTask instanceof Task)) {
            throw new Error("parentTask must be a Task");
        }
        this.parentTask = parentTask;
    }
}

export function addTask(title, description, priority) {
    if (typeof title !== "string" || title.trim() === "") {
        throw new Error("Title must be a non-empty string");
    }
    const newTask = new Task(taskCounter++, title, description, priority);
    taskList.push(newTask);
    return newTask;
}

export function displayAllTasks() {
    for (const task of taskList) {
        console.log(
            `ID: ${task.id} | ${task.title} | Priority: ${task.priority} | Completed: ${task.completed}`
        );
    }
}

export function findTaskByTitle(title) {
    if (typeof title !== "string") {
        throw new Error("Title must be a string");
    }
    return taskList.find(task => task.title === title);
}

export function updateTaskPriority(taskId, newPriority) {
    if (typeof taskId !== "number") {
        throw new Error("Invalid task ID");
    }
    if (typeof newPriority !== "number") {
        throw new Error("Priority must be a number");
    }
    const task = taskList.find(t => t.id === taskId);
    if (!task) return false;
    task.priority = newPriority;
    return true;
}

export function getTaskDetails(task) {
    if (!task) {
        throw new Error("Task not found");
    }
    const { title, description, priority, completed } = task;
    return { title, description, priority, completed };
}

export function mergeTasks(list1, list2) {
    if (!Array.isArray(list1) || !Array.isArray(list2)) {
        throw new Error("Both arguments must be arrays");
    }
    return [...list1, ...list2];
}

export function getHighPriorityTasks(minPriority) {
    return taskList.filter(task => task.priority > minPriority);
}

export function applyToTasks(callback) {
    if (typeof callback !== "function") {
        throw new Error("Callback must be a function");
    }
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
        const index = taskList.findIndex(task => task.id === id);

        if (index === -1) {
            return false;
        }

        taskList.splice(index, 1);
        return true;
    }
};

export { taskList };

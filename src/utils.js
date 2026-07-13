export const priorities = ["low", "medium", "high"];

export function saveToStorage(data) {
    try {
        const jsonData = JSON.stringify(data);
        localStorage.setItem("tasks", jsonData);
    } catch (error) {
        console.error("Error saving to storage:", error);
    }
}

export function loadFromStorage() {
    try {
        const data = localStorage.getItem("tasks");
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Error loading from storage:", error);
        return [];
    }
}


export function generateRandomId() {
    return Math.floor(Math.random() * 100000);
}


export function formatTaskName(name) {
    if (typeof name !== "string") {
        throw new Error("Name must be a string");
    }

    const trimmed = name.trim();

    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}


export function isHighPriority(task) {
    if (!task || typeof task.priority !== "string") {
        return false;
    }

    return task.priority === "high";
}


export function countTasksRecursively(tasks, index = 0) {
    if (!Array.isArray(tasks)) return 0;
    if (index >= tasks.length) return 0;

    return 1 + countTasksRecursively(tasks, index + 1);
}


export function getTaskNames(tasks) {
    return tasks.map(task => task.title);
}

export function filterHighPriority(tasks) {
    return tasks.filter(task => task.priority === "high");
}


export class BaseLogger {
    log(message) {
        console.log(`LOG: ${message}`);
    }
}

export class ErrorLogger extends BaseLogger {
    logError(message) {
        super.log(`ERROR: ${message}`);
    }
}

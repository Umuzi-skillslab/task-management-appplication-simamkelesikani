export const priorities = ["low", "medium", "high"];

export function saveToStorage(data) {
<<<<<<< HEAD
=======
    if (data === undefined) {
        throw new Error("Data is required");
    }

>>>>>>> c9e415c1c259fe1ed77472852f97b92b05726225
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
<<<<<<< HEAD
    return Math.floor(Math.random() * 100000);
=======
    return Date.now() + Math.floor(Math.random() * 1000);
>>>>>>> c9e415c1c259fe1ed77472852f97b92b05726225
}


export function formatTaskName(name) {
<<<<<<< HEAD
    if (typeof name !== "string") {
        throw new Error("Name must be a string");
=======
    if (typeof name !== "string" || name.trim() === "") {
        throw new Error("Name must be a non-empty string");
>>>>>>> c9e415c1c259fe1ed77472852f97b92b05726225
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
<<<<<<< HEAD
    if (!Array.isArray(tasks)) return 0;
=======
    if (!Array.isArray(tasks)) {
        throw new Error("Tasks must be an array");
    }
>>>>>>> c9e415c1c259fe1ed77472852f97b92b05726225
    if (index >= tasks.length) return 0;

    return 1 + countTasksRecursively(tasks, index + 1);
}


export function getTaskNames(tasks) {
<<<<<<< HEAD
=======
    if (!Array.isArray(tasks)) {
        throw new Error("Tasks must be an array");
    }
>>>>>>> c9e415c1c259fe1ed77472852f97b92b05726225
    return tasks.map(task => task.title);
}

export function filterHighPriority(tasks) {
<<<<<<< HEAD
=======
    if (!Array.isArray(tasks)) {
        throw new Error("Tasks must be an array");
    }
>>>>>>> c9e415c1c259fe1ed77472852f97b92b05726225
    return tasks.filter(task => task.priority === "high");
}


export class BaseLogger {
    log(message) {
<<<<<<< HEAD
=======
        if (typeof message !== "string") {
            throw new Error("Message must be a string");
        }
>>>>>>> c9e415c1c259fe1ed77472852f97b92b05726225
        console.log(`LOG: ${message}`);
    }
}

export class ErrorLogger extends BaseLogger {
    logError(message) {
<<<<<<< HEAD
        super.log(`ERROR: ${message}`);
    }
}
=======
        if (typeof message !== "string") {
            throw new Error("Message must be a string");
        }
        super.log(`ERROR: ${message}`);
    }
}
>>>>>>> c9e415c1c259fe1ed77472852f97b92b05726225

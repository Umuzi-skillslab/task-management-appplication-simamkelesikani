import { addTask, taskList } from './app.js';

function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

function setupEventListeners() {
    const form = document.querySelector("#task-form");

    // Only attach ONE listener for adding a task.
    // If the add button is inside the form (type="submit"), the form's
    // submit event already fires on click — attaching both caused
    // handleAddTask to run twice per click (duplicate tasks).
    if (form) {
        form.addEventListener("submit", handleAddTask);
    } else {
        // Fallback only if there's no form wrapping the button.
        const addButton = document.querySelector(".add-task-btn");
        if (addButton) {
            addButton.addEventListener("click", handleAddTask);
        }
    }

    const container = document.getElementById("task-list");
    if (container) {
        container.addEventListener("click", handleTaskClick);
    }
}

function handleAddTask(event) {
    event.preventDefault();
    const titleInput = document.getElementById("title");
    const descInput = document.getElementById("description");
    const priorityInput = document.getElementById("priority");
    if (!titleInput || !descInput || !priorityInput) return;

    const title = titleInput.value.trim();
    const description = descInput.value.trim();

    if (!title) {
        alert("Title is required");
        return;
    }

    const priority = Number(priorityInput.value);
    if (isNaN(priority) || priority < 1 || priority > 5) {
        alert("Priority must be a number between 1 and 5");
        return;
    }

    try {
        addTask(title, description, priority);
    } catch (err) {
        alert(err.message);
        return;
    }

    displayTasks();
    titleInput.value = "";
    descInput.value = "";
    if (priorityInput) priorityInput.value = "";
}

function displayTasks() {
    const container = document.getElementById("task-list");
    if (!container) return;
    container.innerHTML = "";
    taskList.forEach(task => {
        container.insertAdjacentHTML(
            "beforeend",
            `
            <div class="task-item${task.completed ? " completed" : ""}" data-id="${task.id}">
                <h3>${escapeHtml(task.title)}</h3>
                <p>${escapeHtml(task.description)}</p>
                <span>Priority: ${task.priority}</span>
                <span>Status: ${task.completed ? "Done" : "Pending"}</span>
                <button class="toggle-btn">${task.completed ? "Undo" : "Complete"}</button>
            </div>
            `
        );
    });
}

function handleTaskClick(event) {
    const target = event.target;
    if (!target.classList.contains("toggle-btn")) return;
    const taskElement = target.closest(".task-item");
    if (!taskElement) return;
    const taskId = Number(taskElement.dataset.id);
    const task = taskList.find(t => t.id === taskId);
    if (task) {
        task.toggleCompletion();
        displayTasks();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setupEventListeners();
    displayTasks();
});

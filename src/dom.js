import { addTask, taskList } from './app.js';

function setupEventListeners() {
    const addButton = document.querySelector(".add-task-btn");
    const form = document.querySelector("#task-form");

    if (addButton) {
        addButton.addEventListener("click", handleAddTask);
    }

    if (form) {
        form.addEventListener("submit", handleAddTask);
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

    if (!titleInput || !descInput) return;

    const title = titleInput.value.trim();
    const description = descInput.value.trim();
    const priority = Number(priorityInput?.value) || 1;

    if (!title) {
        alert("Title is required");
        return;
    }

    addTask(title, description, priority);
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
            <div class="task-item" data-id="${task.id}">
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <span>Priority: ${task.priority}</span>
                <button class="toggle-btn">Toggle</button>
            </div>
            `
        );
    });
}


function handleTaskClick(event) {
    const target = event.target;

    if (!target.classList.contains("toggle-btn")) return;

    const taskElement = target.closest(".task-item");
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
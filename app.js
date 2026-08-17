const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

let tasks = [];

function render() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.title;
    taskList.appendChild(li);
  });
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Task creation logic will be implemented in a follow-up branch.
});

render();

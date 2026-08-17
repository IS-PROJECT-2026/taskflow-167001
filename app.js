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

function addTask(title) {
  const newTask = {
    id: Date.now(),
    title: title.trim(),
    completed: false,
  };
  tasks.push(newTask);
  render();
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = taskInput.value;
  if (!title.trim()) return;
  addTask(title);
  taskInput.value = "";
  taskInput.focus();
});

render();

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

// Update function: updates total and completed task counts
const updateTask = () => {
  const total = taskList.querySelectorAll("li").length;
  const checked = taskList.querySelectorAll(
    "input[type='checkbox']:checked"
  ).length;

  totalTasks.innerText = `Total tasks: ${total}`;
  completedTasks.innerText = `Completed: ${checked}`;

  if (total === 0) {
    taskList.innerHTML = `<li id="empty-list">No tasks yet. Add one above!</li>`;
  }
};

// Create task element with checkbox and delete functionality
const createTask = (value) => {
  const emptyli = document.getElementById("empty-list");
  if (emptyli) taskList.removeChild(emptyli);

  const li = document.createElement("li");
  li.classList.add("task-item");
  li.style.listStyle = "none";
  const span = document.createElement("span");
  span.classList.add("task-text");
  span.innerText = value;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("complete-checkbox");
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");
    updateTask();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  deleteBtn.classList.add("delete-button");

  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateTask();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  return li;
};

// Add task logic
const addTask = () => {
  const value = taskInput.value.trim();
  if (value === "") {
    alert("Please enter a task");
    return;
  }

  const newTask = createTask(value);
  taskList.appendChild(newTask);
  taskInput.value = "";
  updateTask();
};

// Events
addButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

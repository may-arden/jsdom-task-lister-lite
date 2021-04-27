document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let newTaskForm = document.getElementById("create-task-form");
  let newTaskDescription = document.getElementById("new-task-description");
  let newTaskPriority = document.getElementById("new-task-priority");

  let newTaskUL = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", createNewTask);

});

let createNewTask = event => {
  event.preventDefault();

  let newTaskDescription = document.getElementById("new-task-description");
  let newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();

};

let appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);

};

const todolist = JSON.parse(localStorage.getItem("todoList")) || [];
function saveToLocalStorage() {
  localStorage.setItem("todoList", JSON.stringify(todolist));
}

function displayTodoList() {
  let todolistHtml = "";
  for (let i = 0; i < todolist.length; i++) {
    const todoObject = todolist[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button" onclick="
        deleteTodo(${i});
        displayTodoList();
        ">Delete</button>
      `;
    todolistHtml += html;
  }
  document.querySelector(".js-display").innerHTML = todolistHtml;
}

function storetodolist() {
  const inputElement = document.querySelector(".js-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-input-date");
  const dueDate = dateInputElement.value;
  todolist.push({ name, dueDate });
  saveToLocalStorage();
  inputElement.value = "";
  dateInputElement.value = "";
  displayTodoList();
}
function deleteTodo(index) {
  todolist.splice(index, 1);
  saveToLocalStorage();
  displayTodoList();
}
displayTodoList();

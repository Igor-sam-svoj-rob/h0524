"use strict";

const apiURL = "https://jsonplaceholder.typicode.com/todos?_limit=10";

const getTodos = () => {
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => data.forEach((todo) => noviTodo(todo)));
};

const noviTodo = (todo) => {
  const div = document.createElement("div");
  div.classList.add("todo");
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute("data-id", todo.id);

  let trashIcon = document.createElement("i");
  trashIcon.className = "fa-solid fa-trash";
  trashIcon.addEventListener("click", deleteTodo);
  div.appendChild(trashIcon);

  if (todo.completed) {
    div.classList.add("gotov");
  }

  document.getElementById("todo-list").appendChild(div);
};

const createTodo = (e) => {
  e.preventDefault();
  const input = e.target.firstElementChild;
  const todoNaslov = input.value.trim();

  if (todoNaslov === "") {
    alert("Molimo unesite novi zadatak");
    return;
  }

  const noviTodoZadatak = {
    title: todoNaslov,
    completed: false,
  };

  fetch(apiURL, {
    method: "POST",
    body: JSON.stringify(noviTodoZadatak),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      noviTodo(data);
      input.value = "";
    });
};

const deleteTodo = (e) => {
  if (e.target.classList.contains("fa-trash")) {
    const id = e.target.dataset.id;
    fetch(`${apiURL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const todoDiv = e.target.closest(".todo");
        todoDiv.remove();
      });
  }
};

const toggleCompleted = (e) => {
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("gotov");
    updateTodo(e.target.dataset.id, e.target.classList.contains("gotov"));
  }
};

const updateTodo = (id, completed) => {
  fetch(`${apiURL}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed }),
    headers: { "Content-Type": "application/json" },
  });
};

const init = () => {
  document.addEventListener("DOMContentLoaded", getTodos);
  document.getElementById("todo-form").addEventListener("submit", createTodo);
  document.getElementById("todo-list").addEventListener("click", toggleCompleted);
};

init();

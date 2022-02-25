import { addTask } from "./todoUtils.js";
import render from "./render.js";

// init
const textArea = document.querySelector(".todo__textarea");
export const todoField = document.querySelector(".todo__content");
const submit = document.querySelector(".todo__submit");

// item template
export let item = document.createElement("div");
item.className = "todo__item";
let todoName = document.createElement("p");
let hendle = document.createElement("div");
hendle.className = "todo__hendle";

hendle.insertAdjacentHTML(
  "beforeend",
  '<div class="todo__btn_priority"></div><div class="todo__btn_status"></div><div class="todo__btn_del"></div>'
);

item.append(todoName);
item.append(hendle);

// submit event
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (textArea.value !== "") {
    addTask(textArea.value);
    textArea.value = "";
    render();
  }
});

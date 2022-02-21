import { list } from "./config.js";
import { todoField } from "./init.js";
import initButtons from "./initButtons.js";
import renderNewItem from "./renderNewItem.js";

export default function render() {
  // clear old items
  while (todoField.firstChild) {
    todoField.firstChild.remove();
  }

  // render from list
  renderNewItem();

  // init new buttons
  initButtons();

  // save to LS
  localStorage.setItem("todo", JSON.stringify(list));
}

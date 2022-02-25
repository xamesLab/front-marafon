import { list } from "./config.js";
import { todoField } from "./init.js";
import newItem from "./selectors.js";
import itemStyle from "./itemStyle.js";

export default function renderNewItem() {
  for (let i of list) {
    const item = newItem();

    itemStyle(i, item);

    item.priority.innerText = `${i.priority}`;

    todoField.append(item.new);
  }
}

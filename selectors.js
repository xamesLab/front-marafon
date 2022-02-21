import { item } from "./init.js";

export default function () {
  const newItem = item.cloneNode(true);

  return {
    new: newItem,
    priority: newItem.querySelector(".todo__btn_priority"),
    status: newItem.querySelector(".todo__btn_status"),
    name: newItem.querySelector("p"),
  };
}

export const getParentItemName = (e) => {
  return e.target.parentElement.parentElement.querySelector("p").innerText;
};

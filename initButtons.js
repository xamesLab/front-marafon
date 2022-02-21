import { deleteTask, changeStatus, changePriority } from "./todoUtils.js";
import { STATUS, PRIORITY, CLASSLIST } from "./config.js";
import render from "./render.js";
import { getParentItemName } from "./selectors.js";

export default function initButtons() {
  const statusBtnList = document.querySelectorAll(".todo__btn_status");
  for (let statusButton of statusBtnList) {
    statusButton.addEventListener("click", (e) => {
      if (statusButton.classList.contains(CLASSLIST.TODO)) {
        changeStatus(getParentItemName(e), STATUS.IN_PROGRESS);
      } else if (statusButton.classList.contains(CLASSLIST.IN_PROGRESS)) {
        changeStatus(getParentItemName(e), STATUS.DONE);
      }
      render();
    });
  }

  const priorityBtnList = document.querySelectorAll(".todo__btn_priority");
  for (let priorityButton of priorityBtnList) {
    priorityButton.addEventListener("click", (e) => {
      if (priorityButton.classList.contains(CLASSLIST.LOW)) {
        changePriority(getParentItemName(e), PRIORITY.HIGH);
      } else if (priorityButton.classList.contains(CLASSLIST.HIGH)) {
        changePriority(getParentItemName(e), PRIORITY.LOW);
      }
      render();
    });
  }

  const delBtnList = document.querySelectorAll(".todo__btn_del");
  for (let deleteButton of delBtnList) {
    deleteButton.addEventListener("click", (e) => {
      deleteTask(getParentItemName(e));
      e.target.parentElement.parentElement.remove();
      render();
    });
  }
}

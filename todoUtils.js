import { DEFAULT, list } from "./config.js";

export function addTask(task) {
  list.push({
    name: task,
    status: DEFAULT.STATUS,
    priority: DEFAULT.PRIORITY,
  });
}

export function deleteTask(task) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === task) {
      list.splice(i, 1);
      return;
    }
  }
}

export function changeStatus(task, status) {
  list.forEach((i) => {
    if (i.name === task) {
      i.status = status;
    }
  });
}

export function changePriority(task, priority) {
  list.forEach((i) => {
    if (i.name === task) {
      i.priority = priority;
    }
  });
}

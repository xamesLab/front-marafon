export const STATUS = {
  TODO: "ToDo",
  IN_PROGRESS: "In progress",
  DONE: "Done",
};

export const PRIORITY = {
  LOW: "low",
  HIGH: "high",
};

export const CLASSLIST = {
  LOW: "low",
  HIGH: "high",
  TODO: "todo_st",
  IN_PROGRESS: "in_progress_st",
  DONE: "done_st",
};

export const DEFAULT = {
  STATUS: STATUS.TODO,
  PRIORITY: PRIORITY.HIGH,
};

export const list = JSON.parse(localStorage.getItem("todo")) || [
  {
    name: "добавить фильтрацию",
    status: STATUS.IN_PROGRESS,
    priority: PRIORITY.LOW,
  },
];

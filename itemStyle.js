import { STATUS, PRIORITY, CLASSLIST } from "./config.js";

export default function (i, item) {
  if (i.priority === PRIORITY.HIGH) {
    item.priority.classList.add(CLASSLIST.HIGH);
  } else {
    item.priority.classList.add(CLASSLIST.LOW);
  }

  if (i.status === STATUS.TODO) {
    item.status.classList.add(CLASSLIST.TODO);
  } else if (i.status === STATUS.DONE) {
    item.status.classList.add(CLASSLIST.DONE);
  } else {
    item.status.classList.add(CLASSLIST.IN_PROGRESS);
  }

  item.name.innerText = i.name;
  if (i.status === STATUS.DONE) {
    item.name.style.textDecoration = "line-through";
  }
}

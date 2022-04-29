import { format } from "date-fns";

export function initTimer() {
    const date = format(new Date(), "PPP");

    const timerContent = document.querySelector(".timer>span");

    timerContent.innerText = date;
}

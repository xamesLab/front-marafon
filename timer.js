import { format } from "date-fns";

export function initTimer() {
        setTimeout(() => {
            const date = format(new Date(), 'HH:mm:ss');
            const timerContent = document.querySelector(".timer>span");
            timerContent.innerText = date;
            initTimer()
        }, 1000);
}